<template>
    <BaseWindow
        :shortcut="shortcut"
    >
        <WindowFolderContent>
            <slot/>
        </WindowFolderContent>
        <WindowFolderInfo/>
    </BaseWindow>
</template>

<script lang="ts" setup>
import { IFilesystemItem } from '~/interfaces/filesystem-item'

defineProps({
    shortcut: {
        required: true,
        type: Object as PropType<IFilesystemItem>
    },
})
</script>