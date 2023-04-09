export interface IFilesystemItem {
    id: string
    attributes: {
        title: string
        iconCode: string
        component?: string
        startTreeDelimiter?: 'top' | 'bottom' | 'both'
        focused: boolean
        children:  IFilesystemItem[]
    }
}