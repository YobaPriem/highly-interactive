const useCustomRightClick = () => {
    document.addEventListener('contextmenu', (e: MouseEvent) => {
        const eventTarget = e.target
        e.preventDefault()

        if (!eventTarget) return void 0

        // TODO: менюшка в зависимости от компонента, по которому нажали 
    })
}

export default useCustomRightClick