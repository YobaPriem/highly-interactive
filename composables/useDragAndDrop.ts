const useDragAndDrop = (parentElement: HTMLElement) => {
    let draggedElement: HTMLElement | null = null 
    // TODO: нормальный свап узлов
    const handleDragStart = (e: DragEvent) => {
        const target = e.target as HTMLElement

        if (!e.dataTransfer || !target) return void 0

        draggedElement = target
        
        console.group('drag start')
        console.log(draggedElement)
        console.groupEnd()

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
        const target = e.target as HTMLElement
        const closestDraggable = target.closest('.draggable')

        if (!draggedElement || !closestDraggable || closestDraggable === draggedElement) return void 0
        console.log(target)
        console.log(draggedElement)
        target.replaceWith(closestDraggable, draggedElement);
    }

    parentElement.addEventListener('dragstart', handleDragStart, false)
    parentElement.addEventListener('dragover', handleDragOver, false)
    parentElement.addEventListener('drop', handleDrop, false)

}

export default useDragAndDrop
