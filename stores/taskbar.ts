import { defineStore } from "pinia"
import { IFilesystemItem } from '~/interfaces/filesystem-item'

export const useTaskBarStore = defineStore('taskbar', {
    state: () => ({
        // TODO: дотипизировать
        openedShortcuts: [] as IFilesystemItem[],
        soundLevel: 100,
        soundLevelBeforeMute: 100,
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
        addOpenedShortcut(value: IFilesystemItem) {
            this.openedShortcuts.push(value)
        },
        removeOpenedWindow() {
            // TODO:
        }
    }
})