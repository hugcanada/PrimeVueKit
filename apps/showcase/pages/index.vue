<template>
    <div class="min-h-screen bg-gray-50 py-8">
        <div class="max-w-4xl mx-auto px-4">
            <div class="bg-white rounded-lg shadow-lg p-8">
                <h1 class="text-3xl font-bold text-gray-800 mb-2">PrimeVueKit</h1>
                <p class="text-gray-600 mb-8">专业的 Vue 组件库扩展，基于 PrimeVue 构建</p>

                <!-- 组件列表 -->
                <div class="space-y-6">
                    <h2 class="text-2xl font-semibold text-gray-700 mb-4">组件列表</h2>

                    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <!-- InputDateMask 组件卡片 -->
                        <div class="border rounded-lg p-6 hover:shadow-md transition-shadow">
                            <div class="flex items-center justify-between mb-4">
                                <h3 class="text-lg font-semibold text-gray-800">InputDateMask</h3>
                                <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">可用</span>
                            </div>

                            <p class="text-gray-600 text-sm mb-4">结合输入掩码和日期选择器的专业日期输入组件</p>

                            <div class="space-y-2 mb-4">
                                <div class="text-xs text-gray-500">
                                    <strong>特性:</strong>
                                </div>
                                <ul class="text-xs text-gray-600 space-y-1">
                                    <li>多种日期格式支持</li>
                                    <li>输入掩码自动格式化</li>
                                    <li>日期选择器集成</li>
                                    <li>TypeScript 支持</li>
                                </ul>
                            </div>

                            <div class="space-y-2 mb-4">
                                <div class="text-xs text-gray-500">
                                    <strong>导入方式:</strong>
                                </div>
                                <div class="bg-gray-50 p-2 rounded text-xs font-mono">
                                    <div>import InputDateMask from 'primevuekit/inputdatemask'</div>
                                    <div class="text-gray-500">或</div>
                                    <div>import { InputDateMask } from 'primevuekit'</div>
                                </div>
                            </div>

                            <div class="flex space-x-2">
                                <NuxtLink to="/inputdatemask" class="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors"> 查看示例 </NuxtLink>
                            </div>
                        </div>

                        <!-- 占位符：未来组件 -->
                        <div class="border rounded-lg p-6 border-dashed border-gray-300 bg-gray-50">
                            <div class="flex items-center justify-between mb-4">
                                <h3 class="text-lg font-semibold text-gray-400">更多组件</h3>
                                <span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">即将推出</span>
                            </div>

                            <p class="text-gray-400 text-sm mb-4">更多专业组件正在开发中...</p>

                            <div class="space-y-1 text-xs text-gray-400">
                                <div>• 表单组件</div>
                                <div>• 数据展示组件</div>
                                <div>• 交互组件</div>
                                <div>• 布局组件</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 快速开始 -->
                <div class="mt-8 bg-blue-50 rounded-lg p-6">
                    <h2 class="text-xl font-semibold text-blue-800 mb-4">快速开始</h2>
                    <div class="space-y-4 text-blue-700">
                        <div>
                            <h3 class="font-medium mb-2">1. 安装依赖</h3>
                            <div class="bg-blue-100 p-3 rounded font-mono text-sm">npm install primevuekit</div>
                        </div>
                        <div>
                            <h3 class="font-medium mb-2">2. 导入组件</h3>
                            <div class="bg-blue-100 p-3 rounded font-mono text-sm">import { InputDateMask } from 'primevuekit'</div>
                        </div>
                        <div>
                            <h3 class="font-medium mb-2">3. 使用组件</h3>
                            <div class="bg-blue-100 p-3 rounded font-mono text-sm">&lt;InputDateMask v-model="date" placeholder="YYYY/MM/DD" /&gt;</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// 简洁的首页，只展示组件列表
</script>
