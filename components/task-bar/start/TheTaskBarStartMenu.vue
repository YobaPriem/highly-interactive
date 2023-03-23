<template>
    <div
        class="bg-base-gray-2 w-[180px] absolute top-0 left-0 -translate-y-full shadow-base p-[3px] flex z-10 overflow-y-hidden"
    >
        <div
            class="w-[27px] bg-gradient-bar-blue px-[3px] py-2 text-[21px] leading-[21px] text-white font-bold rotate-180 writing-bottom-top"
        >
            ШINDOWS 99
        </div>
        <div class="w-full">
            <TaskBarStartMenuGroup
                v-for="group in store.startMenuTree"
                :start-menu-tree="group.children"
                :is-children="false"
                :delimiter="group.delimiter"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useTaskBarStore } from '~/stores/taskbar'

const store = useTaskBarStore()
</script>