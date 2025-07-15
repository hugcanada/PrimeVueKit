<template>
    <div class="space-y-8">
        <div class="text-center">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">InputMask 日期输入测试</h2>
            <p class="text-gray-600">测试 InputMask 组件的日期输入功能</p>
        </div>

        <!-- 日期输入示例 -->
        <div class="bg-white border rounded-lg p-6">
            <h3 class="text-lg font-semibold mb-4 text-gray-700">日期输入 (9999/99/99)</h3>
            <div class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">输入日期</label>
                    <InputMask v-model="dateString" mask="9999/99/99" placeholder="YYYY/MM/DD" />
                </div>
                <div v-if="dateString" class="text-sm text-gray-600">
                    输入的日期: {{ dateString }}
                </div>
            </div>
        </div>

        <!-- InputDateMask 组件示例 -->
        <div class="bg-white border rounded-lg p-6">
            <h3 class="text-lg font-semibold mb-4 text-gray-700">InputDateMask 组件</h3>
            <div class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                        InputDateMask 组件
                    </label>
                    <InputDateMask v-model="selectedDate" @valueChange="HandleValueChange" />
                </div>
                <div v-if="changeResult" class="text-sm text-gray-600 bg-gray-50 p-3 rounded">
                    <div class="font-medium mb-2">Value Change 结果:</div>
                    <pre class="text-xs">{{ JSON.stringify(changeResult, null, 2) }}</pre>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, computed } from 'vue'
    import InputMask from 'primevue/inputmask'
    import InputDateMask from 'primevuekit/inputdatemask'
    import type { ValueChangeData } from 'primevuekit/inputdatemask'

    // 响应式数据
    const dateString = ref<string>('')
    const changeResult = ref<ValueChangeData>()

    // 计算属性：将 dateString 包装为 Date 对象
    const selectedDate = computed<Date | null>({
        get() {
            if (dateString.value && dateString.value.length === 10) {
                // 确保格式是 YYYY/MM/DD
                const parts = dateString.value.split('/')
                if (parts.length === 3) {
                    const year = parseInt(parts[0], 10)
                    const month = parseInt(parts[1], 10) - 1 // 月份从0开始
                    const day = parseInt(parts[2], 10)

                    // 验证日期的合法性
                    const date = new Date(year, month, day)
                    if (
                        date.getFullYear() === year &&
                        date.getMonth() === month &&
                        date.getDate() === day
                    ) {
                        return date
                    }
                }
            }
            return null
        },
        set(newDate: Date | null) {
            if (newDate) {
                // 将 Date 对象转换为 YYYY/MM/DD 格式的字符串
                const year = newDate.getFullYear()
                const month = String(newDate.getMonth() + 1).padStart(2, '0')
                const day = String(newDate.getDate()).padStart(2, '0')
                dateString.value = `${year}/${month}/${day}`
            } else {
                dateString.value = ''
            }
        },
    })

    const HandleValueChange = (data: ValueChangeData) => {
        changeResult.value = data
    }
</script>
