import { defineStore } from "pinia"
import { IShortcut } from "~/interfaces/shortcut"

export const useDesktopStore = defineStore('desktop', {
    state: () => ({
        shortcutsList: [
            {
                id: '0',
                title: 'My Computer',
                iconCode: 'icon-large-explorer'
            },
            {
                id: '1',
                title: 'My Documents',
                iconCode: 'icon-large-my-documents'
            },
            {
                id: '2',
                title: 'Recycle Bin',
                iconCode: 'icon-large-recycle-full'
            }
        ] as IShortcut[]
    }),
})