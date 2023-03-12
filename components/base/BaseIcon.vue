<template>
    <svg
        class="w-4 h-4"
    >
        <use :href="`#${iconCode}`"></use>
    </svg>
</template>

<script setup lang="ts">
defineProps({
    iconCode: {
        required: true,
        type: String,
    }
})
</script>