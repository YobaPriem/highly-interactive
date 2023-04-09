<template>
    <BaseWindow
        :title="title"
    >
        <WindowFolderContent>
            <slot/>
        </WindowFolderContent>
        <WindowFolderInfo/>
    </BaseWindow>
</template>

<script lang="ts" setup>
defineProps({
    title: {
        required: true,
        type: String
    }
})
</script>