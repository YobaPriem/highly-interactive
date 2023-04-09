<template>
    <NuxtLayout
        name="desktop"
        :desktop-tree="filesystemStore.desktopTree"
    >
        <template
            v-for="shortcut in filesystemStore.desktopTree"
            #[`shortcut-${shortcut.id}`]="{ shortcut }"
        >
            <DesktopShortcut
                :shortcut="shortcut"
            />
        </template>
        <template
            #windows
        >
            <div
                id="windows"
            >

            </div>
        </template>
    </NuxtLayout>
</template>

<script setup lang="ts">
import { useFileSystemStore } from '~~/stores/filesystem'

const filesystemStore = useFileSystemStore()
</script>