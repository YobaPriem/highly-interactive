<template>
    <div
        ref="self"
        class="p-[3px] shadow-base absolute flex flex-col min-w-[150px] min-h-[100px] bg-base-gray-2 z-10 pointer-events-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 use-move-respect-translate"
        tabindex="0"
        @focus="toggleShortcutAppearence(props.shortcut, 'focused', true)"
        @blur="toggleShortcutAppearence(props.shortcut, 'focused', false)"
        :class="{
            'z-20': shortcut.attributes.focused
        }"
    >
        <BaseTitleBar
            ref="baseTitleBar"
            :shortcut="shortcut"
        >
        </BaseTitleBar>
        <slot/>
        <div
            v-if="resizable"
            ref="resizer"
            class="absolute right-1 bottom-1 cursor-nwse-resize bg-base-gray-2"
        >
            <svg
                class="w-4 h-4 pointer-events-none text-base-gray-4"
            >
                <use href="#icon-resize"></use>
            </svg>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IFilesystemItem } from '~/interfaces/filesystem-item'
import BaseTitleBar from './BaseTitleBar.vue'
const { toggleShortcutAppearence } = useFileSystemStore()

const props = defineProps({
    resizable: {
        required: false,
        type: Boolean,
        default: true
    },
    shortcut: {
        required: true,
        type: Object as PropType<IFilesystemItem>
    },
})

const store = useTaskBarStore()
const baseTitleBar = ref<InstanceType<typeof BaseTitleBar>>()
const self = ref<HTMLElement>()
const resizer = ref<HTMLElement>()

onMounted(() => {
    if (baseTitleBar.value && baseTitleBar.value.self && self.value) {
        useMove({
            point: baseTitleBar.value.self,
            target: self.value,
            direction: 'both',
            respectInitialTranslate: true
        })
    }

    if (props.resizable && self.value && resizer.value) {
        useResize({
            point: resizer.value,
            target: self.value,
            direction: 'both'
        })
    }

    store.addOpenedShortcut(props.shortcut)
})

onUnmounted(() => {
    store.removeOpenedShortcut(props.shortcut)
})

</script>