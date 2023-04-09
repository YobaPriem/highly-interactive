<template>
    <div
        ref="self"
        class="p-[3px] shadow-base absolute flex flex-col min-w-[150px] min-h-[100px] bg-base-gray-2 z-10"
        tabindex="0"
        @focus="setFocus(true)"
        @blur="setFocus(false)"
        :class="{
            'z-20': shortcut.attributes.focused
        }"
    >
        <BaseTitleBar
            ref="baseTitleBar"
            :title="shortcut.attributes.title"
            :focused="shortcut.attributes.focused"
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
import { useTaskBarStore } from '~/stores/taskbar'
import BaseTitleBar from './BaseTitleBar.vue'

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

const setFocus = (value: boolean) => {
    props.shortcut.attributes.focused = value
}

onMounted(() => {
    if (baseTitleBar.value && baseTitleBar.value.self && self.value) {
        useMove({
            point: baseTitleBar.value.self,
            target: self.value,
            direction: 'both'
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

</script>