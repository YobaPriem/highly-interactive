<template>
    <NuxtLayout
        name="desktop"
        :shortcuts-list="desktopStore.shortcutsList"
    >
        <template
            v-for="shortcut in desktopStore.shortcutsList"
            #[`shortcut-${shortcut.id}`]="{ title, iconCode }"
        >
            <DesktopShortcut
                :title="title"
                :icon-code="iconCode"
            />
        </template>
        <template
            #windows
        >
            <WindowFolder/>
            <WindowFolder/>
        </template>
    </NuxtLayout>
</template>

<script setup lang="ts">
import { useDesktopStore } from '~/stores/desktop'
const desktopStore = useDesktopStore()
</script>