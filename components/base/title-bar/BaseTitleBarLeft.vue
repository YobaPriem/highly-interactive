<template>
    <div
        v-if="$slots.icon"
    >
        <slot name="icon"/>
    </div>
    <div
        class="text-title-bar font-bold text-white"
    >
        {{ text }}
    </div>
</template>

<script setup lang="ts">
defineProps({
    text: {
        required: true,
        type: String
    }
})
</script>