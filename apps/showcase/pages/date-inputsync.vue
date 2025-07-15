<template>
    <div>
        <div class="space-y-8">
            <div class="border rounded-lg p-6">
                <h2 class="text-xl font-semibold mb-4">v-model双向绑定联动</h2>
                <div class="space-y-4">
                    <InputDateMask1
                        v-model="date1"
                        :date-format="'yyyy/MM/dd'"
                        placeholder="请选择日期 (YYYY/MM/DD)"
                        class="w-full border-2 border-blue-200"
                    />
                    <p class="text-sm text-gray-600">当前值: {{ date1 }}</p>
                    <InputDateMask1
                        v-model="date2"
                        placeholder="请选择日期 (YYYY/MM/DD)"
                        class="w-full border-2 border-blue-200"
                    />
                    <p class="text-sm text-gray-600">当前值: {{ date2 }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import { watch, computed } from 'vue'
    import InputMasks from 'primevue/inputmask'

    // 方式1: 从 primevuekit/inputdatemask 导入
    import InputDateMask1 from 'primevuekit/inputdatemask'

    // 方式2: 从 primevuekit 导入
    import { InputDateMask as InputDateMask2 } from 'primevuekit'
    import type { ValueChangeData } from 'primevuekit/inputdatemask'

    const date1 = ref<Date | null>(null)
    const date2 = ref<string | null>(null)

    watch(date1, (newValue) => {
        if (newValue) {
            // Create a new date from date1 (newValue)
            const date = new Date(newValue)
            // Add one year
            date.setFullYear(date.getFullYear() + 1)
            // Subtract one day (86400000 milliseconds)
            date.setTime(date.getTime() - 86400000)

            // Format the date in the same format as date1 (assuming YYYY/MM/DD)
            const year = date.getFullYear()
            const month = String(date.getMonth() + 1).padStart(2, '0')
            const day = String(date.getDate()).padStart(2, '0')

            // Set date3 to be date1's second year minus one day
            date2.value = `${year}/${month}/${day}`
        }
    })
</script>
