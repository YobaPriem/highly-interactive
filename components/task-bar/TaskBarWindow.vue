<template>
    <BaseButton
        @focus="setFocus(true)"
        @blur="setFocus(false)"
        :active="shortcut.attributes.focused"
    >
        <BaseIcon
            class="mr-1"
            v-if="shortcut.attributes.iconCode"
            :icon-code="shortcut.attributes.iconCode"
        />
        <span
            class="text-task-bar"
        >
            {{ shortcut.attributes.title }}
        </span>
    </BaseButton>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { IFilesystemItem } from '~/interfaces/filesystem-item'

const props = defineProps({
    shortcut: {
        required: true,
        type: Object as PropType<IFilesystemItem>
    }
})

const setFocus = (value: boolean) => {
    props.shortcut.attributes.focused = value
}

</script>