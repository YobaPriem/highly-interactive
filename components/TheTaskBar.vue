<template>
    <header
        class="shadow-base fixed p-[3px] bottom-0 left-0 right-0 bg-base-gray-3 flex items-stretch"
    >
        <TheTaskBarStart/> 
        <TheTaskBarQuickLaunch/>
        <TaskBarWindow
            v-for="window in taskBarStore.openedWindows"
            :key="window.uid"
            :window-component="window"
        />
    </header>
</template>

<script setup lang="ts">
import { useTaskBarStore } from '~/stores/taskbar'

const taskBarStore = useTaskBarStore()
</script>
