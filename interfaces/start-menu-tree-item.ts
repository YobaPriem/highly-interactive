export default interface IStarMenuTreeItem {
    id: string
    title: string
    delimiter: 'top' | 'bottom' | 'none'
    // callback(...args: unknown[]):void
    iconCode?: string
    children:  IStarMenuTreeItem[]
}
