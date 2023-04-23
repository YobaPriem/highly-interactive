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
            'px-[5px] py-1': !hidePaddings,
            'shadow-base-active': active
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
    },
    active: {
        required: false,
        type: Boolean,
        default: false
    }
})
</script>