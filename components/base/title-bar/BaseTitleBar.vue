<template>
    <div
        class="min-h-[1.25rem] max-h-5 px-[3px] py-1 bg-gradient-bar flex justify-between items-center"
        v-if="$slots.left || $slots.right"
        :class="{
            'bg-gradient-bar-blue': isFocused
        }"
        ref="self"
    >
        <div
            class=""
            v-if="$slots.left"
        >
            <slot name="left"/>
        </div>
        <div
            class=""
            v-if="$slots.right"
        >
            <slot name="right"/>
        </div>
    </div>
</template>

<script setup lang="ts">
const self = ref()

defineProps({
    isFocused: {
        required: false,
        type: Boolean,
        default: false
    }
})

defineExpose({
    self
})

</script>