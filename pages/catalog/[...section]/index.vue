<template>
    <div>
        Controller

        {{ route.params.type }}
    </div>
</template>

<script lang="ts" setup>

definePageMeta({
    middleware: 'page-type',
})
const route = useRoute()
</script>

<style scoped>

</style>