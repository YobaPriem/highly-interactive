<template>
    <div
        ref="self"
        class="w-[3px] h-5 cursor-e-resize bg-base-gray-3 border border-t-white border-l-white border-r-base-gray-4 border-b-base-gray-4"
    >
    </div>
</template>

<script setup lang="ts">
const self = ref<HTMLElement>()

defineExpose({
    self
})
</script>
