<template>
    <BaseWindow
        :shortcut="shortcut"
        :resizable="false"
    >
        <div
            class="p-3 flex justify-start gap-3"
        >
            <BaseIcon
                :icon-code="errorIcon"
                classes="w-8 h-8"
            />
            <div
                class="text-title"
            >
                <slot
                    v-if="$slots.default"
                />
                <div
                    v-else
                >
                    Task failed successfully!
                </div>
            </div>
        </div>
    </BaseWindow>
</template>

<script lang="ts" setup>
import { IFilesystemItem } from '~/interfaces/filesystem-item'

defineProps({
    shortcut: {
        required: true,
        type: Object as PropType<IFilesystemItem>
    },
    errorIcon: {
        required: false,
        type: String,
        default: 'icon-medium-warning'
    }
})
</script>