<template>
    <div
        class="px-[3px]"
    >
        <BaseDelimiter
            v-if="delimiter === 'top'"
            type="horizontal"
        />
        <TaskBarStartMenuItem
            v-for="menuItem in startMenuTree"
            :key="menuItem.id"
            :menu-item="menuItem"
            :is-chilren="isChildren"
        />
        <BaseDelimiter
            v-if="delimiter === 'bottom'"
            type="horizontal"
        />
    </div>
</template>

<script setup lang="ts">
import IStarMenuTreeItem from 'interfaces/start-menu-tree-item'
import { PropType } from 'vue'

defineProps({
    startMenuTree: {
        required: true,
        type: [] as PropType<IStarMenuTreeItem[]>
    },
    isChildren: {
        required: false,
        type: Boolean,
        default: false
    },
    delimiter: {
        required: false,
        type: String as PropType<'top' | 'bottom' | 'none'>,
        default: 'none'
    }
})
</script>