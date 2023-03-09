<template>
    <div
        ref="self"
        class="p-[3px] shadow-base absolute flex flex-col min-w-[100px]"
        tabindex="0"
        @focus="setFocus(true)"
        @blur="setFocus(false)"
    >
        <BaseTitleBar
            ref="baseTitleBar"
            text="test fix c"
            :is-focused="window.isFocused"
        >
        </BaseTitleBar>
        <div
            class="bg-base-gray-2 grow"
        >

        </div>
    </div>
</template>

<script setup lang="ts">
import { IWindowComponent, WindowStatus } from '~/interfaces/window'
import { useTaskBarStore } from '~/stores/taskbar'
import BaseTitleBar from './BaseTitleBar.vue'

const store = useTaskBarStore()
const instance = getCurrentInstance()
const baseTitleBar = ref<InstanceType<typeof BaseTitleBar>>()
const self = ref<HTMLElement>()

const setFocus = (value: boolean) => {
    window.isFocused = value
}

const setStatus = (value: WindowStatus) => {
    window.status = value
}

const window = reactive<IWindowComponent>({
    uid: instance?.uid ?? 0,
    title: 'Window: ' + instance?.uid ?? 0,
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

    store.addOpenedWindow(window)
})

</script>