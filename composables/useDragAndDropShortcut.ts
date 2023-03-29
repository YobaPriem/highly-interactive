const useDragAndDropShortcut = (
    options: {
        dummyClasslist: string
    }
): void => {
    let draggedElement: HTMLElement | null = null
    let originalContainer: HTMLElement | null = null

    const handleDragStart = (e: DragEvent) => {
        const target = e.target as HTMLElement
        originalContainer = target.closest('.drop-container')

        if (!e.dataTransfer || !target) return void 0

        draggedElement = target

        e.dataTransfer.effectAllowed = 'move'
    }

    const handleDragOver = (e: DragEvent) => {
        if (e.preventDefault) {
            e.preventDefault()
        }

        if (!e.dataTransfer) return void 0
        e.dataTransfer.dropEffect = "move";
        return false;
    }

    const handleDrop = (e: DragEvent) => {
        const eventTarget = e.target as HTMLElement
        const newContainer = eventTarget.closest('.drop-container')

        if (!draggedElement || !eventTarget || !newContainer || !originalContainer) return void 0

        if (originalContainer === newContainer) {
            // Для перетаскивания ярлыков на рабочем столе по заданным позициям
            const dropTarget = eventTarget.closest<HTMLElement>('.dummy')

            if (!dropTarget) return void 0

            useSwapElements(draggedElement, dropTarget)
        } else if (newContainer.classList.contains('drop-container--window')) {
            if (!originalContainer.classList.contains('drop-container--window')) {
                // Для вытаскивания ярлыка с рабочего стола в окно
                const dummyElement = document.createElement('div')
                dummyElement.className = options.dummyClasslist
    
                draggedElement.before(dummyElement)
            }
            // Для вытаскивания ярлыка с рабочего стола в окно\между окнами 
            newContainer.appendChild(draggedElement)
        } else {
            // Для вытаскивания ярылка на рабочий стол из окна
            eventTarget.replaceWith(draggedElement)
        }
    }

    document.addEventListener('dragstart', handleDragStart, false)
    document.addEventListener('dragover', handleDragOver, false)
    document.addEventListener('drop', handleDrop, false)
}

export default useDragAndDropShortcut
