<template>
    <div class="flex gap-2" :class="props.class">
        <InputMask
            :mask="maskValue"
            v-model="inputMaskRef"
            class="w-full"
            :id="props.inputId"
            :placeholder="actualPlaceholder"
            @blur="handleInputBlur"
            @input="handleInputChange"
        />
        <Button icon="pi pi-calendar" :tabindex="-1" @click="toggle" />
    </div>
    <Popover ref="op">
        <DatePicker
            show-button-bar
            inline
            v-model="model"
            :pt="{
                pcClearButton: {
                    root: {
                        onClick: () => {
                            clearDate()
                        },
                    },
                },
            }"
        />
    </Popover>
</template>

<script setup lang="ts">
    import InputMask from 'primevue/inputmask'
    import Button from 'primevue/button'
    import DatePicker from 'primevue/datepicker'
    import Popover from 'primevue/popover'
    import { ref, computed, watch, nextTick } from 'vue'
    import { isValid, parse, format } from 'date-fns'
    import type {
        InputDateMaskProps,
        InputDateMaskEmits,
        ValueChangeData,
    } from './InputDateMask.d.ts'

    const model = defineModel<Date>()

    const props = withDefaults(defineProps<InputDateMaskProps>(), {
        dateFormat: 'yyyy/mm/dd',
        placeHolder: 'YYYY/MM/DD',
    })

    const emit = defineEmits<InputDateMaskEmits>()

    // 组件引用
    const op = ref()
    const inputMaskRef = ref<string>('')

    // 计算属性
    const maskValue = computed(() => {
        // 将日期格式转换为 InputMask 的 mask 格式
        return props.dateFormat.replace(/[a-zA-Z]/g, '9')
    })

    const actualPlaceholder = computed(() => {
        return props.placeholder || props.placeHolder
    })

    // 日期格式转换函数
    const convertDateFormat = (format: string) => {
        // 将自定义格式转换为 date-fns 格式
        return format
            .replace(/yyyy/g, 'yyyy')
            .replace(/yy/g, 'yy')
            .replace(/mm/g, 'MM')
            .replace(/dd/g, 'dd')
    }

    // 解析输入的日期字符串
    const parseInputDate = (inputValue: string): Date | null => {
        if (!inputValue || inputValue.includes('_')) return null

        try {
            const dateFormat = convertDateFormat(props.dateFormat)
            const parsedDate = parse(inputValue, dateFormat, new Date())

            return isValid(parsedDate) ? parsedDate : null
        } catch {
            return null
        }
    }

    // 格式化日期为字符串
    const formatDate = (date: Date | null): string => {
        if (!date) return ''

        try {
            const dateFormat = convertDateFormat(props.dateFormat)
            return format(date, dateFormat)
        } catch {
            return ''
        }
    }

    // 获取数据库格式的日期字符串
    const getDateString = (date: Date | null): string => {
        if (!date) return ''

        try {
            return format(date, 'yyyy-MM-dd')
        } catch {
            return ''
        }
    }

    // 发送值变化事件
    const emitValueChange = (date: Date | null) => {
        const valueChangeData: ValueChangeData = {
            value: date,
            formattedString: formatDate(date),
            dateString: getDateString(date),
        }

        emit('valueChange', valueChangeData)
        emit('update:isValidDate', date !== null)
    }

    // 输入框变化处理
    const handleInputChange = () => {
        const parsedDate = parseInputDate(inputMaskRef.value)

        // 始终更新 model 值，无论是否解析成功
        model.value = parsedDate || undefined

        emitValueChange(parsedDate)
    }

    // 输入框失焦处理
    const handleInputBlur = () => {
        const parsedDate = parseInputDate(inputMaskRef.value)

        // 始终更新 model 值
        model.value = parsedDate || undefined

        if (parsedDate) {
            // 格式化输入框显示
            inputMaskRef.value = formatDate(parsedDate)
        }

        emitValueChange(parsedDate)
    }

    // 切换日期选择器
    const toggle = (event: Event) => {
        op.value.toggle(event)
    }

    // 显示日期选择器
    const show = () => {
        op.value.show()
    }

    // 隐藏日期选择器
    const hide = () => {
        op.value.hide()
    }

    // 清空日期
    const clearDate = () => {
        model.value = undefined
        inputMaskRef.value = ''
        emitValueChange(null)
        hide()
    }

    // 获取当前格式化的日期字符串
    const getFormattedDate = (): string | null => {
        return model.value ? formatDate(model.value) : null
    }

    // 获取数据库格式的日期字符串
    const getDateStringValue = (): string | null => {
        return model.value ? getDateString(model.value) : null
    }

    // 检查当前日期格式是否有效
    const isValidDate = (): boolean => {
        return model.value !== null && model.value !== undefined
    }

    // 监听 model 变化，同步到输入框
    watch(
        model,
        (newValue, oldValue) => {
            const dateValue = newValue || null
            const formattedDate = formatDate(dateValue)

            // 只有在输入框值与格式化后的日期不同时才更新
            if (inputMaskRef.value !== formattedDate) {
                inputMaskRef.value = formattedDate
            }

            // 如果是通过 DatePicker 选择的日期（不是初始化），关闭 Popover
            if (newValue && newValue !== oldValue && op.value) {
                nextTick(() => {
                    op.value.hide()
                })
            }
        },
        { immediate: true },
    )

    // 暴露组件实例方法
    defineExpose({
        toggle,
        show,
        hide,
        clear: clearDate,
        getFormattedDate,
        getDateString: getDateStringValue,
        isValid: isValidDate,
    })
</script>
