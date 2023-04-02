import { defineStore } from "pinia"
import { IWindowComponent } from "~/interfaces/window"
import IStarMenuTreeItem from '~/interfaces/start-menu-tree-item'

export const useTaskBarStore = defineStore('taskbar', {
    state: () => ({
        // TODO: дотипизировать
        openedWindows: [] as IWindowComponent[],
        soundLevel: 100,
        soundLevelBeforeMute: 100,
        startMenuTree: [
            {
                id: '0',
                title: 'utils',
                delimiter: 'none',
                children: [
                    {
                        id: '0-1',
                        title: 'Documents',
                        iconCode: 'icon-large-my-documents',
                        delimiter: 'none',
                        children: [
                            {
                                id: '0-2',
                                title: 'My documents',
                                iconCode: 'icon-large-my-documents',
                                delimiter: 'bottom',
                                children: []
                            },
                            {
                                id: '0-3',
                                title: 'do.txt',
                                iconCode: 'icon-large-txt',
                                delimiter: 'none',
                                children: []
                            },
                            {
                                id: '0-4',
                                title: 'not.txt',
                                iconCode: 'icon-large-txt',
                                delimiter: 'none',
                                children: []
                            },
                            {
                                id: '0-5',
                                title: 'touch.txt',
                                iconCode: 'icon-large-txt',
                                delimiter: 'none',
                                children: []
                            },
                            {
                                id: '0-6',
                                title: 'this.txt',
                                iconCode: 'icon-large-txt',
                                delimiter: 'none',
                                children: []
                            }
                        ],
                    },
                    {
                        id: '0-2',
                        title: 'Documents',
                        iconCode: 'icon-large-my-documents',
                        delimiter: 'none',
                        children: []
                    },
                    {
                        id: '0-2',
                        title: 'Documents',
                        iconCode: 'icon-large-my-documents',
                        delimiter: 'none',
                        children: []
                    },
                    {
                        id: '0-2',
                        title: 'Documents',
                        iconCode: 'icon-large-my-documents',
                        delimiter: 'none',
                        children: []
                    },
                ]
            },
            {
                id: '1',
                title: 'system',
                delimiter: 'top',
                children: [
                    {
                        id: '1-0',
                        title: 'shut down',
                        iconCode: 'icon-large-shutdown',
                        children: []
                    },
                ]
            },
        ] as IStarMenuTreeItem[]
    }),
    actions: {
        setSoundLevel(value: number) {
            if (value < 0) value = 0
            if (value > 100) value = 100

            this.soundLevel = value
        },
        toggleMuteSoundLevel(value: boolean) {
            if (value) {
                this.soundLevelBeforeMute = this.soundLevel

                this.soundLevel = 0
            } else {
                this.soundLevel = this.soundLevelBeforeMute
            }
        },
        test() {
            console.log(1231231)
        },
        addOpenedWindow(value: IWindowComponent) {
            this.openedWindows.push(value)
        },
        removeOpenedWindow() {
            // TODO:
        }
    }
})