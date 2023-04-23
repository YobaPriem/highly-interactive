<template>
    <WindowsError
        :shortcut="shortcut"
    >
        <span class="block">The my computer is not accessible.</span>
        <span class="block">No permission to access recource.</span>
        <BaseButton
            class="mt-4"
            @click="toggleShortcutAppearence(shortcut, 'opened', false)"
        >
            Well... Ok? I guess...
        </BaseButton>
    </WindowsError>
</template>

<script lang="ts" setup>
import { IFilesystemItem } from '~/interfaces/filesystem-item'
const { toggleShortcutAppearence} = useFileSystemStore()

defineProps({
    shortcut: {
        required: true,
        type: Object as PropType<IFilesystemItem>
    },
})
</script>