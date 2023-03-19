export default interface IStarMenuTreeItem {
    id: string
    title: string
    // callback(...args: unknown[]):void
    iconCode?: string
    children?:  IStarMenuTreeItem[]
}