<template>
    <Menubar :model="menuItems" class="border-none bg-transparent p-0">
        <template #item="{ item, props }">
            <NuxtLink
                :to="item.route"
                v-bind="props.action"
                class="px-4 py-2 rounded transition-colors flex items-center gap-2"
                :class="
                    $route.path === item.route
                        ? item.activeClass
                        : 'text-gray-700 hover:bg-gray-100'
                "
            >
                <i v-if="item.icon" :class="item.icon"></i>
                <span>{{ item.label }}</span>
            </NuxtLink>
        </template>
    </Menubar>
</template>

<script setup lang="ts">
    import Menubar from 'primevue/menubar'

    const menuItems = [
        {
            label: '首页',
            icon: 'pi pi-home',
            route: '/',
            activeClass: 'bg-blue-500 text-white',
        },
        {
            label: '日期输入联动测试',
            icon: 'pi pi-sync',
            route: '/date-inputsync',
            activeClass: 'bg-green-500 text-white',
        },
        {
            label: '日期输入',
            icon: 'pi pi-calendar',
            route: '/date-input',
            activeClass: 'bg-orange-500 text-white',
        },
    ]
</script>
