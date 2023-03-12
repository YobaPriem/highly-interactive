<template>
    <div class="text-title-bar">
        {{ formattedDate }}
    </div>
</template>

<script setup lang="ts">
let date = ref(new Date())

const formattedDate = computed(() => `${date.value.getHours()}:${date.value.getMinutes()}`)

</script>