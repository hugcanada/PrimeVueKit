<template>
    <div class="min-h-screen bg-gray-50 py-8">
        <div class="max-w-4xl mx-auto px-4">
            <NuxtRouteAnnouncer />

            <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
                <!-- 头部导航 -->
                <div class="flex justify-between items-center mb-8">
                    <h1 class="text-3xl font-bold text-gray-800">PrimeVueKit Showcase</h1>

                    <!-- 导航菜单 -->
                    <nav class="flex space-x-4">
                        <NuxtLink to="/" class="px-4 py-2 rounded transition-colors" :class="$route.path === '/' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"> 首页 </NuxtLink>
                        <NuxtLink to="/test" class="px-4 py-2 rounded transition-colors" :class="$route.path === '/test' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"> 导入测试 </NuxtLink>
                        <NuxtLink to="/icons" class="px-4 py-2 rounded transition-colors" :class="$route.path === '/icons' ? 'bg-purple-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"> 图标测试 </NuxtLink>
                    </nav>
                </div>

                <!-- 页面内容 -->
                <slot />
            </div>
        </div>
    </div>
</template>

<style scoped>
/* 可以在这里添加布局相关的样式 */
</style>
