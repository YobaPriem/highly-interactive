<template>
    <svg
        :class="classes"
    >
        <use :href="`#${iconCode}`"></use>
    </svg>
</template>

<script setup lang="ts">
defineProps({
    iconCode: {
        required: true,
        type: String,
    },
    classes: {
        required: false,
        type: String,
        default: 'w-4 h-4'
    }
})
</script>