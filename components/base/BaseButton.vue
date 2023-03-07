<template>
    <button
        class="
            bg-base-gray-2
            shadow-base
            active:shadow-base-active
            disabled:opacity-30
            flex
            items-center
        "
        :class="{
            'px-[3px] py-1': !hidePaddings
        }"
        type="button"
    >
        <slot/>
    </button>
</template>

<script setup lang="ts">
defineProps({
    hidePaddings: {
        required: false,
        type: Boolean,
        default: false
    }
})
</script>