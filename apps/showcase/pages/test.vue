<template>
    <div>
        <h1 class="text-3xl font-bold text-gray-800 mb-8">导入方式测试</h1>

        <div class="space-y-8">
            <!-- 方式1: 从 primevuekit/inputdatemask 导入 -->
            <div class="border rounded-lg p-6">
                <h2 class="text-xl font-semibold mb-4">方式1: import from 'primevuekit/inputdatemask'</h2>
                <div class="space-y-4">
                    <label class="block text-sm font-medium text-gray-700">使用子包导入</label>
                    <InputDateMask1 v-model="date1" placeholder="请选择日期 (YYYY/MM/DD)" class="w-full border-2 border-blue-200" />
                    <p class="text-sm text-gray-600">当前值: {{ date1 }}</p>
                </div>
            </div>

            <!-- 方式2: 从 primevuekit 导入 -->
            <div class="border rounded-lg p-6">
                <h2 class="text-xl font-semibold mb-4">方式2: import from 'primevuekit'</h2>
                <div class="space-y-4">
                    <label class="block text-sm font-medium text-gray-700">使用主包导入</label>
                    <InputDateMask2 v-model="date2" placeholder="请选择日期 (YYYY/MM/DD)" class="w-full border-2 border-green-200" />
                    <p class="text-sm text-gray-600">当前值: {{ date2 }}</p>
                </div>
            </div>

            <!-- 导入代码示例 -->
            <div class="border rounded-lg p-6 bg-gray-50">
                <h2 class="text-xl font-semibold mb-4">代码示例</h2>
                <div class="space-y-4">
                    <div>
                        <h3 class="font-medium text-gray-700">方式1: 子包导入</h3>
                        <pre class="bg-gray-800 text-green-400 p-4 rounded mt-2 text-sm"><code>import InputDateMask from 'primevuekit/inputdatemask';</code></pre>
                    </div>
                    <div>
                        <h3 class="font-medium text-gray-700">方式2: 主包导入</h3>
                        <pre class="bg-gray-800 text-green-400 p-4 rounded mt-2 text-sm"><code>import { InputDateMask } from 'primevuekit';</code></pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// 方式1: 从 primevuekit/inputdatemask 导入
import InputDateMask1 from 'primevuekit/inputdatemask';

// 方式2: 从 primevuekit 导入
import { InputDateMask as InputDateMask2 } from 'primevuekit';

const date1 = ref(null);
const date2 = ref(null);
</script>
