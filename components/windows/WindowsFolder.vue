<template>
    <BaseWindow
        :shortcut="shortcut"
    >
        <WindowsFolderContent>
            <slot/>
        </WindowsFolderContent>
        <WindowsFolderInfo/>
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