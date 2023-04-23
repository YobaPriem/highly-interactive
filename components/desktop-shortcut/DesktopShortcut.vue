<template>
    <div
        ref="self"
        class="shortcut w-[85px] max-h-[70px] flex flex-col items-center gap-[7px] py-2 relative"
        :class="{
            'shortcut--focused': shortcut.attributes.focused && !shortcut.attributes.opened,
            'draggable': draggable
        }"
        :draggable="draggable"
        @click="toggleShortcutAppearence(shortcut, 'focused', true)"
        @dblclick="toggleShortcutAppearence(shortcut, 'opened', true)"
        @contextmenu="toggleContenxtMenu(true)"
        v-click-outside="handleClickOutside"
    >
        <BaseIcon
            classes="w-8 h-8"
            :icon-code="shortcut.attributes.iconCode"
        />
        <span
            class="text-center text-white text-title border border-dashed border-transparent"
            :class="{
                'bg-shortcut-selected-blue border-white': shortcut.attributes.focused && !shortcut.attributes.opened
            }"
        >
            {{ shortcut.attributes.title }}
        </span>
        <TheDesktopShortcutContextMenu
            v-if="isContextMenuOpened"
        />
    </div>
    <Teleport
        v-if="dynamicComponent && shortcut.attributes.opened"
        to="#windows"
    >
        <component
            :is="dynamicComponent"
            :shortcut="shortcut"
        />
    </Teleport>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { IFilesystemItem } from '~/interfaces/filesystem-item'

const { toggleShortcutAppearence } = useFileSystemStore()

const props = defineProps({
    shortcut: {
        required: true,
        type: Object as PropType<IFilesystemItem>
    },
    draggable: {
        required: false,
        type: Boolean,
        default: true
    }
})

let isContextMenuOpened = ref(false)

const dynamicComponent = props.shortcut.attributes.component ? resolveComponent(props.shortcut.attributes.component) : null

const toggleContenxtMenu = (forcedValue?: boolean) => {
    if (forcedValue !== undefined) {
        isContextMenuOpened.value = forcedValue
    } else {
        isContextMenuOpened.value = !isContextMenuOpened.value
    }
}

const handleClickOutside = () => {
    toggleContenxtMenu(false)

    if (!props.shortcut.attributes.opened) {
        toggleShortcutAppearence(props.shortcut, 'focused', false)
    }
}

</script>