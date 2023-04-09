<template>
    <div
        class="draggable shortcut w-[85px] max-h-[70px] flex flex-col items-center gap-[7px] py-2"
        :class="{
            'shortcut--focused': isFocused
        }"
        draggable="true"
        @click="toggleFocus(true)"
        @dblclick="openComponent"
        v-click-outside="() => toggleFocus(false)"
    >
        <BaseIcon
            classes="w-8 h-8"
            :icon-code="shortcut.attributes.iconCode"
        />
        <span
            class="text-center text-white text-title border border-dashed border-transparent"
            :class="{
                'bg-shortcut-selected-blue border-white': isFocused
            }"
        >
            {{ shortcut.attributes.title }}
        </span>
    </div>
    <Teleport
        v-if="dynamicComponent && isComponentOpened"
        to="#windows"
    >
        <component
            :is="dynamicComponent"
            :shortcut="shortcut"
        />
    </Teleport>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { IFilesystemItem } from '~/interfaces/filesystem-item'

const props = defineProps({
    shortcut: {
        required: true,
        type: Object as PropType<IFilesystemItem>
    },
})

let isFocused = ref(false)
let isComponentOpened = ref(false)
const dynamicComponent = props.shortcut.attributes.component ? resolveComponent(props.shortcut.attributes.component) : null

const openComponent = () => {
    isComponentOpened.value = true
}

const toggleFocus = (forcedValue?: boolean) => {
    if (forcedValue !== undefined) {
        isFocused.value = forcedValue
    } else {
        isFocused.value = !isFocused.value
    }
}
</script>