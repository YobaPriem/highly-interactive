<template>
    <div
        class="min-h-[1.25rem] max-h-5 px-[3px] py-1 bg-gradient-bar flex justify-between items-center"
        :class="{
            'bg-gradient-bar-blue': shortcut.attributes.focused
        }"
        ref="self"
    >
        <div class="flex items-center gap-[3px] pointer-events-none">
            <BaseIcon
                v-if="shortcut.attributes.iconCode"
                :icon-code="shortcut.attributes.iconCode"
            />
            <div
                class="text-title font-bold text-white pointer-events-none"
            >
                {{ shortcut.attributes.title }}
            </div>
        </div>
        <BaseButton
            :hide-paddings="true"
            @click="toggleShortcutAppearence(shortcut, 'opened', false)"
        >
            <BaseIcon
                icon-code="icon-buttons-close"
            />
        </BaseButton>
    </div>
</template>

<script setup lang="ts">
import { IFilesystemItem } from '~/interfaces/filesystem-item'
const { toggleShortcutAppearence } = useFileSystemStore()

const self = ref<HTMLElement>()

defineProps({
    shortcut: {
        required: true,
        type: Object as PropType<IFilesystemItem>
    },
})

defineExpose({
    self
})
</script>