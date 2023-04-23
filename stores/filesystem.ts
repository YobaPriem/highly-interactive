import { IFilesystemItem } from "~/interfaces/filesystem-item"

export const useFileSystemStore = defineStore('filesystem', {
    state: () => ({
        desktopTree: [
            {
                id: 'item-0',
                attributes: {
                    title: 'My Computer',
                    iconCode: 'icon-large-explorer',
                    focused: false,
                    opened: false,
                    component: 'TheMyComputer',
                    children: []
                },
            },
            {
                id: 'item-1',
                attributes: {
                    title: 'My Documents',
                    iconCode: 'icon-large-my-documents',
                    focused: false,
                    opened: false,
                    component: 'TheMyDocuments',
                    children: [
                        {
                            id: 'item-1-0',
                            attributes: {
                                title: 'work.txt',
                                iconCode: 'icon-large-txt',
                                focused: false,
                                opened: false,
                                component: 'TxtFile',
                                children: []
                            },
                        },
                        {
                            id: 'item-1-1',
                            attributes: {
                                title: 'phones.txt',
                                iconCode: 'icon-large-txt',
                                focused: false,
                                opened: false,
                                component: 'TxtFile',
                                children: []
                            },
                        },
                        {
                            id: 'item-1-2',
                            attributes: {
                                title: 'family.txt',
                                iconCode: 'icon-large-txt',
                                focused: false,
                                opened: false,
                                component: 'TxtFile',
                                children: []
                            },
                        },
                        {
                            id: 'item-1-3',
                            attributes: {
                                title: 'password.txt',
                                iconCode: 'icon-large-txt',
                                focused: false,
                                opened: false,
                                component: 'TxtFile',
                                children: []
                            },
                        }
                    ]
                },
            },
        ] as IFilesystemItem[],
        startTree: [
            {
                id: 'group-0',
                attributes: {
                    title: 'Programs',
                    iconCode: 'icon-large-explorer',
                    focused: false,
                    opened: false,
                    children: []
                },
            },
            {
                id: 'group-1',
                attributes: {
                    title: 'Documents',
                    iconCode: 'icon-large-my-documents',
                    focused: false,
                    opened: false,
                    children: [
                    ]
                },
            },
            {
                id: 'group-2',
                attributes: {
                    title: 'Documents',
                    iconCode: 'icon-large-my-documents',
                    focused: false,
                    opened: false,
                    children: []
                },
            },
            {
                id: 'group-3',
                attributes: {
                    title: 'Documents',
                    iconCode: 'icon-large-my-documents',
                    focused: false,
                    opened: false,
                    children: []
                },
            },
            {
                id: 'group-4',
                attributes: {
                    title: 'Shut down',
                    iconCode: 'icon-large-shutdown',
                    focused: false,
                    opened: false,
                    // component: 'TheShutdown',
                    startTreeDelimiter: 'top',
                    children: []
                },
            }
        ] as IFilesystemItem[]
    }),
    actions: {
        test() {
            console.log('useFileSystemStore:test')
        },
        toggleShortcutAppearence(shortcut: IFilesystemItem, property: 'focused' | 'opened', forcedValue?: boolean) {
            if (forcedValue !== undefined) {
                shortcut.attributes[property] = forcedValue
            } else {
                shortcut.attributes[property] = !shortcut.attributes.opened
            }
        },
    }
})