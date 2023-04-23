<template>
    <NuxtLayout
        name="desktop"
        :desktop-tree="filesystemStore.desktopTree"
    >
        <template
            v-for="shortcut in filesystemStore.desktopTree"
            #[`shortcut-${shortcut.id}`]
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
const filesystemStore = useFileSystemStore()
</script>