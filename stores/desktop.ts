import { defineStore } from "pinia"
import { IShortcut } from "~/interfaces/shortcut"

export const useDesktopStore = defineStore('desktop', {
    state: () => ({
        shortcutsList: [
            {
                id: '0',
                title: 'My Computer',
                iconCode: 'icon-large-explorer'
            }
        ] as IShortcut[]
    }),
})