import { defineStore } from "pinia"
import { IWindowComponent } from "~/interfaces/window"
import IStarMenuTreeItem from 'interfaces/start-menu-tree-item'

export const useTaskBarStore = defineStore('taskbar', {
    state: () => ({
        // TODO: дотипизировать
        openedWindows: [] as IWindowComponent[],
        soundLevel: 100,
        soundLevelBeforeMute: 100,
        startMenuTree: [
            {
                id: '0',
                title: 'sadasd',
                iconCode: 'icon-start',
                // callback: () => void 0
            },
            {
                id: '1',
                title: 'sadasd',
                iconCode: 'icon-start',
                // callback: () => void 0
            },
            {
                id: '2',
                title: 'sadasd',
                iconCode: 'icon-start',
                // callback: () => void 0
            },
            {
                id: '3',
                title: 'sadasd',
                iconCode: 'icon-start',
                // callback: () => void 0
            },
            {
                id: '4',
                title: 'sadasd',
                iconCode: 'icon-start',
                children: [
                    {
                        id: '5',
                        title: 'sadasd',
                        iconCode: 'icon-start',
                        children: [
                            {
                                id: '3',
                                title: 'sadasd',
                                iconCode: 'icon-start',
                                // callback: () => void 0
                            }
                        ]
                        // callback: () => void 0
                    },
                    {
                        id: '6',
                        title: 'sadasd',
                        iconCode: 'icon-start',
                        // callback: () => void 0
                    }
                ],
                // callback: () => void 0
            }
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