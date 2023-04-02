<template>
    <div
        class="relative"
        v-click-outside="() => toggleControl(false)"
    >
        <BaseIcon
            icon-code="icon-small-volume"
            @click="toggleControl()"
        />
        <div
            v-if="controlOpened"
            class="absolute top-0 right-0 bg-base-gray-2 w-[80px] h-[140px] -translate-y-full shadow-base px-2 pt-[10px] pb-2  flex flex-col items-center"
        >
            <span
                class="text-title"
            >
                Volume
            </span>
            <BaseSlider
                class="grow my-2"
                type="vertical"
            />
            <BaseCheckbox
                name="mute"
                :model-value="mute"
                title="Mute"
                @update:model-value="handleMute"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useTaskBarStore } from '~/stores/taskbar'

const taskBarStore = useTaskBarStore()
const controlOpened = ref(false)
const mute = ref(false)

const toggleControl = (forcedValue?: boolean) => {
    if (forcedValue !== undefined) {
        controlOpened.value = forcedValue
    } else {
        controlOpened.value = !controlOpened.value
    }
}

const handleMute = (value: boolean) => {
    mute.value = value
}

watch(mute, (newValue: boolean) => {
    taskBarStore.toggleMuteSoundLevel(newValue)
})

</script>