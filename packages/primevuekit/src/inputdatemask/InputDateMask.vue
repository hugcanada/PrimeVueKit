<template>
    <div class="flex gap-2">
        <InputMask :mask="maskValue" v-model="inputMaskRef" class="w-full" :id="inputId" :placeholder="placeHolder" />
        <Button icon="pi pi-calendar" :tabindex="-1" @click="toggle" />
    </div>
    <Popover ref="op">
        <DatePicker
            show-button-bar
            inline
            v-model="datePickerRef"
            :pt="{
                pcClearButton: {
                    root: {
                        onClick: () => {
                            datePickerRef = null;
                        }
                    }
                }
            }"
        />
    </Popover>
</template>

<script setup lang="ts">
import InputMask from 'primevue/inputmask';
import Button from 'primevue/button';
import DatePicker from 'primevue/datepicker';
import Popover from 'primevue/popover';
import { ref, computed, watch } from 'vue';
import { isValid, parse, format } from 'date-fns';
import type { InputDateMaskProps, InputDateMaskEmits, ValueChangeData } from './InputDateMask.d.ts';

const model = defineModel<Date>();

const props = withDefaults(defineProps<InputDateMaskProps>(), {
    dateFormat: 'yyyy/mm/dd',
    placeHolder: 'YYYY/MM/DD'
});

const op = ref();
const datePickerRef = ref<Date | null>(model.value ?? null);
const emit = defineEmits<InputDateMaskEmits>();

const toggle = (e: Event) => {
    op.value.toggle(e);
};

const inputMaskRef = computed<string | null>({
    get() {
        if (!datePickerRef.value) return '';
        return format(datePickerRef.value, props.dateFormat);
    },
    set(val) {
        if (!val) {
            datePickerRef.value = null;
            return;
        }
        const parsedDate = parse(val, props.dateFormat, new Date());
        if (isValid(parsedDate)) {
            datePickerRef.value = parsedDate;
        } else {
            datePickerRef.value = null;
        }
    }
});

const isValidDate = computed(() => {
    if (!inputMaskRef.value) return false;
    const parsedDate = parse(inputMaskRef.value, props.dateFormat, new Date());
    return isValid(parsedDate);
});

const maskValue = computed(() => {
    return props.dateFormat.replace(/[a-zA-Z]/g, '9');
});

const dateStringReadyForDataBase = computed(() => {
    if (!datePickerRef.value) return null;
    return format(datePickerRef.value, 'yyyy-MM-dd');
});

const emitValueChange = () => {
    const valueChangeData: ValueChangeData = {
        value: datePickerRef.value,
        formattedString: inputMaskRef.value ?? '',
        dateString: dateStringReadyForDataBase.value ?? '',
        isFormatValid: isValidDate.value
    };
    emit('valueChange', valueChangeData);
};

watch([() => datePickerRef.value, () => inputMaskRef.value, () => isValidDate.value], emitValueChange);
watch(
    () => datePickerRef.value,
    () => op.value.hide()
);
</script>
