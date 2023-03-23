import { defineStore } from "pinia"
import { IWindowComponent } from "~/interfaces/window"
import IStarMenuTreeItem from '~~/interfaces/start-menu-tree-item'

export const useTaskBarStore = defineStore('taskbar', {
    state: () => ({
        // TODO: дотипизировать
        openedWindows: [] as IWindowComponent[],
        soundLevel: 100,
        soundLevelBeforeMute: 100,
        startMenuTree: [
            {
                id: '0',
                title: 'programms',
                delimiter: 'none',
                children: [
                    {
                        id: '0-0',
                        title: 'sadasd',
                        iconCode: 'icon-start',
                        delimiter: 'none',
                        children: []
                        // callback: () => void 0
                    },
                    {
                        id: '0-1',
                        title: 'sadasd',
                        iconCode: 'icon-start',
                        delimiter: 'none',
                        children: []
                        // callback: () => void 0
                    },
                    {
                        id: '0-2',
                        title: 'sadasd',
                        iconCode: 'icon-start',
                        delimiter: 'none',
                        children: []
                        // callback: () => void 0
                    },
                    {
                        id: '0-3',
                        title: 'sadasd',
                        iconCode: 'icon-start',
                        delimiter: 'none',
                        children: []
                        // callback: () => void 0
                    },
                    {
                        id: '0-4',
                        title: 'sadasd',
                        iconCode: 'icon-start',
                        delimiter: 'none',
                        children: [
                            {
                                id: '0-5',
                                title: 'sadasd',
                                iconCode: 'icon-start',
                                delimiter: 'none',
                                children: [
                                    {
                                        id: '0-7',
                                        title: 'sadasd',
                                        iconCode: 'icon-start',
                                        delimiter: 'none',
                                        children: []
                                        // callback: () => void 0
                                    }
                                ]
                                // callback: () => void 0
                            },
                            {
                                id: '0-6',
                                title: 'sadasd',
                                iconCode: 'icon-start',
                                delimiter: 'none',
                                children: []
                                // callback: () => void 0
                            }
                        ],
                        // callback: () => void 0
                    }
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
                        iconCode: 'icon-start',
                        children: []
                        // callback: () => void 0
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
        addOpenedWindow(value: IWindowComponent) {
            this.openedWindows.push(value)
        },
        removeOpenedWindow() {
            // TODO:
        }
    }
})