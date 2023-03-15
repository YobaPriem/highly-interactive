<template>
    <div class="text-title-bar">
        {{ formattedDate }}
    </div>
</template>

<script setup lang="ts">
let date = ref(new Date())

const formattedDate = computed(() => {
    const h = date.value.getHours()
    const m = date.value.getMinutes()

    return `${h}:${m < 10 ? 0 : ''}${m}`
})
</script>