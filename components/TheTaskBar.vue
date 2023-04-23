<template>
    <header
        class="shadow-base fixed p-[3px] bottom-0 left-0 right-0 bg-base-gray-3 flex items-stretch"
    >
        <TheTaskBarStart/> 
        <TheTaskBarQuickLaunch/>
        <div
            class="grow flex items-stretch"
        >
            <TaskBarWindow
                v-for="shortcut in taskBarStore.openedShortcuts"
                :key="shortcut.id"
                :shortcut="shortcut"
            />
        </div>
        <TheTaskBarTray />
    </header>
</template>

<script setup lang="ts">
const taskBarStore = useTaskBarStore()
</script>
