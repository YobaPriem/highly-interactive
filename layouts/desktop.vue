<template>
    <div
        ref="grid"
        class="
        bg-classic-teal
            drop-container
            w-full
            h-full
            grid
            grid-cols-[repeat(auto-fill,_85px)]
            grid-rows-[repeat(auto-fill,_69px)]
            grid-flow-col
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
            class="dummy w-[85px] h-[70px]"
        >
        </div>
        <slot
            name="windows"
        />
    </div>
    <TheTaskBar/>
</template>

<script setup lang="ts">
import { IShortcut } from '~/interfaces/shortcut'

const props = defineProps({
    shortcutsList: {
        required: true,
        type: Array as PropType<IShortcut[]>
    }
})

const grid = ref<HTMLElement>()

const dummyCellsNum = computed(() => {
    if (!process.client || !grid.value) return 0

    const colsNum = Math.floor(grid.value.offsetWidth / 85)
    const rowsNum = Math.floor(grid.value.offsetHeight / 65)

    return colsNum * rowsNum - props.shortcutsList.length
})

onMounted(() => {
    useDragAndDropShortcut({
        dummyClasslist: 'dummy w-[85px] h-[70px]'
    })
    useCustomRightClick()
})

</script>