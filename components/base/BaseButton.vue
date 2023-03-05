<template>
    <button
        class="
            shadow-base
            active:shadow-base-active
            disabled:opacity-30
        "
        type="button"
    >
        <slot/>
    </button>
</template>

<script setup lang="ts">
defineProps({
    iconCode: {
        required: true,
        type: String,
    }
})
</script>