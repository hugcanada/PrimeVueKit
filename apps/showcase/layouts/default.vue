<template>
    <div class="min-h-screen bg-gray-50 py-8">
        <div class="max-w-4xl mx-auto px-4">
            <NuxtRouteAnnouncer />

            <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
                <!-- 头部导航 -->
                <div class="flex justify-between items-center mb-8">
                    <h1 class="text-3xl font-bold text-gray-800">PrimeVueKit Showcase</h1>

                    <!-- 导航菜单 -->
                    <Navigation />
                </div>

                <!-- 页面内容 -->
                <slot />
            </div>
        </div>
    </div>
</template>
