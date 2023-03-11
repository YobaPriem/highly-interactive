<template>
    <div
        ref="self"
        class="p-[3px] shadow-base absolute flex flex-col min-w-[150px] min-h-[100px] bg-base-gray-2"
        tabindex="0"
        @focus="setFocus(true)"
        @blur="setFocus(false)"
        :class="{
            'z-10': window.isFocused
        }"
    >
        <BaseTitleBar
            ref="baseTitleBar"
            :text="title"
            :is-focused="window.isFocused"
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
import { IWindowComponent, WindowStatus } from '~/interfaces/window'
import { useTaskBarStore } from '~/stores/taskbar'
import BaseTitleBar from './BaseTitleBar.vue'

const props = defineProps({
    resizable: {
        required: false,
        type: Boolean,
        default: true
    }
})

const store = useTaskBarStore()
const instance = getCurrentInstance()
const baseTitleBar = ref<InstanceType<typeof BaseTitleBar>>()
const self = ref<HTMLElement>()
const resizer = ref<HTMLElement>()
const title = 'test fix c'

const setFocus = (value: boolean) => {
    window.isFocused = value
}

const setStatus = (value: WindowStatus) => {
    window.status = value
}

const window = reactive<IWindowComponent>({
    uid: instance?.uid ?? 0,
    title: title,
    status: 'opened',
    isFocused: false,
    setStatus,
    setFocus
})

onMounted(() => {
    if (baseTitleBar.value && baseTitleBar.value.self && self.value) {
        useDrag({
            point: baseTitleBar.value.self,
            target: self.value
        })
    }

    if (props.resizable && self.value && resizer.value) {
        useResize({
            point: resizer.value,
            target: self.value,
            direction: 'both'
        })
    }

    store.addOpenedWindow(window)
})

</script>