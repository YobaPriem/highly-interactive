import { IFilesystemItem } from '~/interfaces/filesystem-item'

export const useTaskBarStore = defineStore('taskbar', {
    state: () => ({
        // TODO: дотипизировать
        openedShortcuts: [] as IFilesystemItem[],
        soundLevel: 100,
        soundLevelBeforeMute: 100,
    }),
    actions: {
        test() {
            console.log('useTaskBarStore:test')
        },
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
        addOpenedShortcut(shortcut: IFilesystemItem) {
            this.openedShortcuts.push(shortcut)
        },
        removeOpenedShortcut(shortcut: IFilesystemItem) {
            const id = this.openedShortcuts.findIndex(el => el.id === shortcut.id)

            if (id < 0) return void 0

            this.openedShortcuts.splice(id, 1)
        }
    }
})