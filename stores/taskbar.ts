import { defineStore } from "pinia"

export const useTaskBarStore = defineStore('taskbar', {
    state: () => ({
        // TODO: дотипизировать
        openedWindows: [] as unknown[],
        soundLevel: 100,
    }),
    actions: {
        setSoundLevel(value: number) {
            if (value < 0) value = 0
            if (value > 100) value = 100

            this.soundLevel = value
        },
        addOpenedWindow() {
            // TODO:
        },
        removeOpenedWindow() {
            // TODO:
        }
    }
})