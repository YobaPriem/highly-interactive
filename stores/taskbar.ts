import { defineStore } from "pinia"
import { IWindowComponent } from "~/interfaces/window"

export const useTaskBarStore = defineStore('taskbar', {
    state: () => ({
        // TODO: дотипизировать
        openedWindows: [] as IWindowComponent[],
        soundLevel: 100,
    }),
    actions: {
        setSoundLevel(value: number) {
            if (value < 0) value = 0
            if (value > 100) value = 100

            this.soundLevel = value
        },
        addOpenedWindow(value: IWindowComponent) {
            this.openedWindows.push(value)
        },
        removeOpenedWindow() {
            // TODO:
        }
    }
})