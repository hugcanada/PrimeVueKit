<template>
    <div>
        <h1 class="text-3xl font-bold text-gray-800 mb-8">图标测试</h1>

        <!-- 图标测试 -->
        <div class="space-y-6">
            <div class="border rounded-lg p-6">
                <h2 class="text-xl font-semibold mb-4">PrimeIcons 测试</h2>
                <div class="space-y-4">
                    <div class="flex items-center space-x-4">
                        <span class="text-sm font-medium">直接使用图标类：</span>
                        <i class="pi pi-calendar text-2xl"></i>
                        <i class="pi pi-check text-2xl text-green-500"></i>
                        <i class="pi pi-times text-2xl text-red-500"></i>
                        <i class="pi pi-user text-2xl text-blue-500"></i>
                    </div>

                    <div class="flex items-center space-x-4">
                        <span class="text-sm font-medium">PrimeVue Button 组件：</span>
                        <Button icon="pi pi-calendar" label="日历" />
                        <Button icon="pi pi-check" label="确认" severity="success" />
                        <Button icon="pi pi-times" label="取消" severity="danger" />
                        <Button icon="pi pi-user" label="用户" severity="info" />
                    </div>

                    <div class="flex items-center space-x-4">
                        <span class="text-sm font-medium">只有图标的按钮：</span>
                        <Button icon="pi pi-calendar" />
                        <Button icon="pi pi-check" severity="success" />
                        <Button icon="pi pi-times" severity="danger" />
                        <Button icon="pi pi-user" severity="info" />
                    </div>
                </div>
            </div>

            <div class="border rounded-lg p-6">
                <h2 class="text-xl font-semibold mb-4">InputDateMask 组件测试</h2>
                <div class="space-y-4">
                    <label class="block text-sm font-medium text-gray-700">带日历图标的日期输入：</label>
                    <InputDateMask v-model="testDate" placeholder="请选择日期" class="w-full max-w-md" />
                    <p class="text-sm text-gray-600">当前值: {{ testDate }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { InputDateMask } from 'primevuekit';

const testDate = ref(null);
</script>
