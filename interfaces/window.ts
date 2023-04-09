export type WindowStatus = 'opened' | 'minimized' | 'maximized'

export interface IWindowComponent {
    uid: number
    title: string
    status: WindowStatus
    focused: boolean
    icon?: string
    setStatus: (value: WindowStatus) => void
    setFocus: (value: boolean) => void
}