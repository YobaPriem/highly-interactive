<template>
    <div
        ref="grid"
        class="
            w-full
            h-full
            grid
            grid-cols-[repeat(auto-fill,_69px)]
            grid-rows-[repeat(auto-fill,_53px)]
            grid-flow-col
            gap-4
        "
    >
        <div
            class="draggable"
            v-for="shortcut in shortcutsList"
            :key="shortcut.id"
            draggable="true"
        >
            <slot
                :name="`shortcut-${shortcut.id}`"
                :title="shortcut.title"
                :icon-code="shortcut.iconCode"
            />
        </div>
        <div
            v-for="dummyCellId in dummyCellsNum"
            :key="dummyCellId"
            class="draggable w-[69px] h-[53px]"
            draggable="true"
        >
          
        </div>
        <slot
            name="windows"
        />
    </div>
</template>

<script setup lang="ts">
import { IShortcut } from '~/interfaces/shortcut'

// TODO: почему-то type: [] as ... кидает warning
const props = defineProps({
    shortcutsList: {
        required: true,
        type: Array as PropType<IShortcut[]>
    }
})

const grid = ref<HTMLElement>()

const dummyCellsNum = computed(() => {
    if (!process.client || !grid.value) return 0
    
    const colsNum = Math.floor(grid.value.offsetWidth / (69 + 16))
    const rowsNum = Math.floor(grid.value.offsetHeight / (53 + 16))

    return colsNum * rowsNum - props.shortcutsList.length
})

onMounted(() => {
    if (grid.value) {
        useDragAndDrop({
            parentElement: grid.value,
            targetSelector: '.draggable'
        })
    }
})

</script>