<template>
    <WindowFolder
        :shortcut="shortcut"
    >
        <DesktopShortcut
            v-for="child in shortcut.attributes.children"
            :key="child.id"
            :shortcut="child"
        />
    </WindowFolder>
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