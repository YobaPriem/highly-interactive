<template>
    <div
        :class="{
            'p-[3px]': isChildren
        }"
    >
        <BaseDelimiter
            v-if="group.delimiter === 'top'"
            type="horizontal"
        />
        <TaskBarStartMenuItem
            v-for="menuItem in group.children"
            :key="menuItem.id"
            :menu-item="menuItem"
            :is-children="isChildren"
        />
        <BaseDelimiter
            v-if="group.delimiter === 'bottom'"
            type="horizontal"
        />
    </div>
</template>

<script setup lang="ts">
import IStarMenuTreeItem from 'interfaces/start-menu-tree-item'
import { PropType } from 'vue'

defineProps({
    group: {
        required: true,
        type: Object as PropType<IStarMenuTreeItem>
    },
    isChildren: {
        required: false,
        type: Boolean,
        default: false
    },
})
</script>