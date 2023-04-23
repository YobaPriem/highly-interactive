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
        <slot
            v-for="shortcut in desktopTree"
            :key="shortcut.id"
            :name="`shortcut-${shortcut.id}`"
            :shortcut="shortcut"
        />
        <div
            v-for="dummyCellId in dummyCellsNum"
            :key="dummyCellId"
            class="dummy w-[85px] h-[70px]"
        >
        </div>
        <div
            class="fixed top-0 left-0 right-0 bottom-0 pointer-events-none"
        >
            <slot
                name="windows"
            />
        </div>
    </div>
    <TheTaskBar/>
</template>

<script setup lang="ts">
import { IFilesystemItem } from '~/interfaces/filesystem-item'

const props = defineProps({
    desktopTree: {
        required: true,
        type: Array as PropType<IFilesystemItem[]>
    }
})

const grid = ref<HTMLElement>()

const dummyCellsNum = computed(() => {
    if (!process.client || !grid.value) return 0

    const colsNum = Math.floor(grid.value.offsetWidth / 85)
    const rowsNum = Math.floor(grid.value.offsetHeight / 65)

    return colsNum * rowsNum - props.desktopTree.length
})

onMounted(() => {
    useDragAndDropShortcut({
        dummyClasslist: 'dummy w-[85px] h-[70px]'
    })
    useCustomRightClick()
})

</script>