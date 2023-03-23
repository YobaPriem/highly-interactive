<template>
    <div
        class="w-[69px] flex flex-col items-center gap-[7px]"
        @click="toggleFocus(true)"
        v-click-outside="() => toggleFocus(false)"
    >
        <BaseIcon
            classes="w-8 h-8"
            :icon-code="iconCode"
        />
        <span
            class="text-center text-white text-title border border-dashed border-transparent"
            :class="{
                'bg-shortcut-selected-blue border-white': isFocused
            }"
        >
            {{ title }}
        </span>
    </div>
</template>

<script setup lang="ts">
defineProps({
    title: {
        required: true,
        type: String
    },
    iconCode: {
        required: true,
        type: String
    }
})

let isFocused = ref(false)

const toggleFocus = (forcedValue?: boolean) => {
    if (forcedValue !== undefined) {
        isFocused.value = forcedValue
    } else {
        isFocused.value = !isFocused.value
    }
}

</script>