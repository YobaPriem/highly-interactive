<template>
</template>

<script setup lang="ts">
const props = defineProps({
    iconCode: {
        required: true,
        type: String
    },
    title: {
        required: true,
        type: String,
    },
    children: {
        required: false,
        // TODO
    }
})

</script>