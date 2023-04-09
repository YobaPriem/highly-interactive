import { defineStore } from "pinia"
import { IFilesystemItem } from "~/interfaces/filesystem-item"

// TODO: доделать группы - каждый ярлык - группа какая-то - каждая группа - в глобальной группе для пуска (top\bottom\main) - у групп могут быть подгруппы

export const useFileSystemStore = defineStore('filesystem', {
    state: () => ({
        desktopTree: [
            {
                id: 'item-0',
                attributes: {
                    title: 'My Computer',
                    iconCode: 'icon-large-explorer',
                    focused: false,
                    // component: 'TheMyComputer',
                    children: []
                },
            },
            {
                id: 'item-1',
                attributes: {
                    title: 'My Documents',
                    iconCode: 'icon-large-my-documents',
                    focused: false,
                    // component: 'TheMyDocuments',
                    children: []
                },
            },
            {
                id: 'item-2',
                attributes: {
                    title: 'Recycle Bin',
                    iconCode: 'icon-large-recycle-full',
                    focused: false,
                    component: 'TheRecycleBinWindow',
                    children: [
                        {
                            id: 'item-1-0',
                            attributes: {
                                title: 'work.txt',
                                iconCode: 'icon-large-txt',
                                focused: false,
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
                    children: []
                },
            },
            {
                id: 'group-1',
                attributes: {
                    title: 'Documents',
                    iconCode: 'icon-large-my-documents',
                    focused: false,
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
                    children: []
                },
            },
            {
                id: 'group-3',
                attributes: {
                    title: 'Documents',
                    iconCode: 'icon-large-my-documents',
                    focused: false,
                    children: []
                },
            },
            {
                id: 'group-4',
                attributes: {
                    title: 'Shut down',
                    iconCode: 'icon-large-shutdown',
                    focused: false,
                    // component: 'TheShutdown',
                    startTreeDelimiter: 'top',
                    children: []
                },
            }
        ] as IFilesystemItem[]
    }),
    actions: {
        // // getById(id: string): IFilesystemItem | null {
        // //     let findedItem: IFilesystemItem | null = null

        // //     this.tree.find(item => {
        // //         i
        // //     })

        // //     const recursiveFn = (item: IFilesystemItem, id: string) => {
        // //         if (item.id === id) {
        // //             return item
        // //         } else if (item.children.length) {

        // //         } else {
        // //             return null
        // //         }
        // //     }

        // //     return findedItem
        // // },
        // replaceChildren(donor: IFilesystemItem, recipient: IFilesystemItem, childId: string) {
        //     const childIterableId = donor.attributes.children.findIndex(item => item.id === childId)

        //     if (childIterableId < 0) return void 0

        //     recipient.attributes.children.push(donor.attributes.children[childIterableId])
        //     donor.attributes.children.splice(childIterableId, 1)
        // },
    }
})