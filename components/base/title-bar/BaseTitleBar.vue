<template>
    <div
        class="min-h-[1.25rem] max-h-5 px-[3px] py-1 bg-gradient-bar flex justify-between items-center"
        v-if="$slots.title || $slots.buttons"
        :class="{
            'bg-gradient-bar-blue': isFocused
        }"
    >
        <div
            class=""
            v-if="$slots.title"
        >
            <slot name="title"/>
        </div>
        <div
            class=""
            v-if="$slots.buttons"
        >
            <slot name="buttons"/>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    isFocused: {
        required: false,
        type: Boolean,
        default: false
    }
})

</script>