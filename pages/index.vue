<template>
    <NuxtLayout
        name="desktop"
        :test="1"
        :shortcuts-list="shortcutsList"
    >
        <template
            v-for="shortcut in shortcutsList"
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
import { IShortcut } from '~~/interfaces/shortcut'

const shortcutsList: IShortcut[] = [
    {
        id: '0',
        title: '0 test fix c',
        iconCode: 'icon-start'
    },
    {
        id: '1',
        title: '1 test fix c',
        iconCode: 'icon-start'
    },
    {
        id: '2',
        title: '2 test fix c',
        iconCode: 'icon-start'
    },
    {
        id: '3',
        title: '3 test fix c',
        iconCode: 'icon-start'
    },
    {
        id: '4',
        title: '4 test fix c',
        iconCode: 'icon-start'
    },
    {
        id: '5',
        title: '5 test fix c',
        iconCode: 'icon-start'
    },
    {
        id: '6',
        title: '6 test fix c',
        iconCode: 'icon-start'
    },
    {
        id: '7',
        title: '7 test fix c',
        iconCode: 'icon-start'
    }
]
</script>