<template>
    <div class="min-h-screen bg-gray-50 py-8">
        <div class="max-w-4xl mx-auto px-4">
            <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
                <!-- 头部导航 -->
                <div class="mb-8">
                    <nav class="flex items-center space-x-4 mb-4">
                        <NuxtLink to="/" class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">← 返回首页</NuxtLink>
                        <NuxtLink to="/test" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">导入测试</NuxtLink>
                    </nav>
                    <h1 class="text-3xl font-bold text-gray-800 mb-2">InputDateMask 组件</h1>
                    <p class="text-gray-600">一个结合了输入掩码和日期选择器的专业日期输入组件</p>
                </div>

                <!-- 示例区域 -->
                <div class="space-y-8">
                    <!-- 基础示例 -->
                    <div class="border rounded-lg p-6">
                        <h2 class="text-xl font-semibold text-gray-700 mb-4">基础用法</h2>
                        <div class="grid gap-6 md:grid-cols-2">
                            <div class="space-y-4">
                                <div class="space-y-2">
                                    <label class="block text-sm font-medium text-gray-700">选择日期 (YYYY/MM/DD)</label>
                                    <InputDateMask v-model="basicDate" placeholder="YYYY/MM/DD" date-format="yyyy/mm/dd" class="w-full" />
                                    <p class="text-sm text-gray-500">当前值: {{ basicDate || '未选择' }}</p>
                                </div>
                            </div>
                            <div class="bg-gray-50 p-4 rounded">
                                <h3 class="font-medium mb-2">代码示例</h3>
                                <pre class="text-sm text-gray-700"><code>&lt;InputDateMask
  v-model="basicDate"
  placeholder="YYYY/MM/DD"
  date-format="yyyy/mm/dd"
/&gt;</code></pre>
                            </div>
                        </div>
                    </div>

                    <!-- 自定义格式示例 -->
                    <div class="border rounded-lg p-6">
                        <h2 class="text-xl font-semibold text-gray-700 mb-4">自定义格式</h2>
                        <div class="grid gap-6 md:grid-cols-2">
                            <div class="space-y-4">
                                <div class="space-y-2">
                                    <label class="block text-sm font-medium text-gray-700">月-日-年格式 (MM-DD-YYYY)</label>
                                    <InputDateMask v-model="customDate" placeholder="MM-DD-YYYY" date-format="mm-dd-yyyy" class="w-full" />
                                    <p class="text-sm text-gray-500">当前值: {{ customDate || '未选择' }}</p>
                                </div>
                            </div>
                            <div class="bg-gray-50 p-4 rounded">
                                <h3 class="font-medium mb-2">代码示例</h3>
                                <pre class="text-sm text-gray-700"><code>&lt;InputDateMask
  v-model="customDate"
  placeholder="MM-DD-YYYY"
  date-format="mm-dd-yyyy"
/&gt;</code></pre>
                            </div>
                        </div>
                    </div>

                    <!-- 事件处理示例 -->
                    <div class="border rounded-lg p-6">
                        <h2 class="text-xl font-semibold text-gray-700 mb-4">事件处理</h2>
                        <div class="grid gap-6 md:grid-cols-2">
                            <div class="space-y-4">
                                <div class="space-y-2">
                                    <label class="block text-sm font-medium text-gray-700">带事件监听</label>
                                    <InputDateMask v-model="eventDate" placeholder="YYYY/MM/DD" date-format="yyyy/mm/dd" class="w-full" @date-change="handleDateChange" @update:model-value="handleModelUpdate" />
                                    <p class="text-sm text-gray-500">当前值: {{ eventDate || '未选择' }}</p>
                                    <div v-if="lastEvent" class="text-sm text-blue-600"><strong>最后事件:</strong> {{ lastEvent }}</div>
                                </div>
                            </div>
                            <div class="bg-gray-50 p-4 rounded">
                                <h3 class="font-medium mb-2">代码示例</h3>
                                <pre class="text-sm text-gray-700"><code>&lt;InputDateMask
  v-model="eventDate"
  placeholder="YYYY/MM/DD"
  date-format="yyyy/mm/dd"
  @date-change="handleDateChange"
  @update:model-value="handleModelUpdate"
/&gt;</code></pre>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 功能说明 -->
                <div class="mt-8 bg-blue-50 rounded-lg p-6">
                    <h2 class="text-xl font-semibold text-blue-800 mb-4">功能特性</h2>
                    <div class="grid gap-6 md:grid-cols-2">
                        <div>
                            <h3 class="font-medium text-blue-700 mb-2">核心功能</h3>
                            <ul class="space-y-1 text-sm text-blue-600">
                                <li>• 支持多种日期格式</li>
                                <li>• 内置输入掩码，自动格式化</li>
                                <li>• 集成日期选择器</li>
                                <li>• 完整的事件系统</li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="font-medium text-blue-700 mb-2">技术特性</h3>
                            <ul class="space-y-1 text-sm text-blue-600">
                                <li>• 基于 PrimeVue 构建</li>
                                <li>• TypeScript 支持</li>
                                <li>• v-model 双向绑定</li>
                                <li>• 响应式设计</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- 导入说明 -->
                <div class="mt-8 bg-green-50 rounded-lg p-6">
                    <h2 class="text-xl font-semibold text-green-800 mb-4">导入方式</h2>
                    <div class="space-y-4">
                        <div>
                            <h3 class="font-medium text-green-700 mb-2">方式1: 子包导入 (推荐)</h3>
                            <div class="bg-green-100 p-3 rounded font-mono text-sm">import InputDateMask from 'primevuekit/inputdatemask'</div>
                        </div>
                        <div>
                            <h3 class="font-medium text-green-700 mb-2">方式2: 主包导入</h3>
                            <div class="bg-green-100 p-3 rounded font-mono text-sm">import { InputDateMask } from 'primevuekit'</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import InputDateMask from 'primevuekit/inputdatemask';

// 响应式数据
const basicDate = ref(null);
const customDate = ref(null);
const eventDate = ref(null);
const lastEvent = ref('');

// 事件处理函数
const handleDateChange = (newDate) => {
    lastEvent.value = `日期改变: ${newDate}`;
    console.log('日期改变:', newDate);
};

const handleModelUpdate = (newValue) => {
    lastEvent.value = `模型更新: ${newValue}`;
    console.log('模型更新:', newValue);
};
</script>
