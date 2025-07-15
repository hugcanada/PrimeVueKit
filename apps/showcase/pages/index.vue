<template>
    <div>
        <!-- 组件列表 -->
        <div class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-700 mb-4">组件列表</h2>
            <p class="text-gray-600 mb-6">PrimeVueKit 提供的专业 Vue 组件库</p>

            <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <!-- InputDateMask 组件卡片 -->
                <div class="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div class="flex items-center mb-4">
                        <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                            <i class="pi pi-calendar text-blue-600"></i>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-gray-800">InputDateMask</h3>
                            <p class="text-sm text-gray-500">日期输入组件</p>
                        </div>
                    </div>
                    <p class="text-gray-600 text-sm mb-4">结合了输入掩码和日期选择器的专业日期输入组件，支持多种日期格式。</p>
                    <div class="flex space-x-2">
                        <NuxtLink to="/test" class="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"> 查看示例 </NuxtLink>
                    </div>
                </div>

                <!-- 更多组件卡片可以在这里添加 -->
                <div class="border rounded-lg p-6 hover:shadow-lg transition-shadow border-dashed border-gray-300">
                    <div class="flex items-center mb-4">
                        <div class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                            <i class="pi pi-plus text-gray-400"></i>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-gray-400">更多组件</h3>
                            <p class="text-sm text-gray-400">即将推出</p>
                        </div>
                    </div>
                    <p class="text-gray-400 text-sm mb-4">更多专业组件正在开发中...</p>
                </div>
            </div>
        </div>

        <!-- 功能说明 -->
        <div class="mt-8 bg-blue-50 rounded-lg p-6">
            <h2 class="text-xl font-semibold text-blue-800 mb-4">库特性</h2>
            <ul class="space-y-2 text-blue-700">
                <li>• 基于 PrimeVue 构建，样式一致</li>
                <li>• 完整的 TypeScript 支持</li>
                <li>• 支持多种导入方式</li>
                <li>• 现代化的 Vue 3 Composition API</li>
                <li>• 完善的文档和示例</li>
                <li>• 活跃的社区支持</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
// 这里可以添加页面相关的逻辑
</script>
