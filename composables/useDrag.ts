const useDrag = (point: HTMLElement, target?: HTMLElement) => {
    const posValues = {
        started: false,
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        deltaX: 0,
        deltaY: 0,
    }

    const dragPoint = point
    const dragTarget = target ?? dragPoint

    const dragStartHandler = (e: TouchEvent | MouseEvent) => {
        if (e.target as HTMLElement !== dragPoint) return void 0
        posValues.started = true
    
        let posX = 0
        let posY = 0
    
        if (window.TouchEvent && e instanceof TouchEvent) {
            posX = e.changedTouches[0].clientX
            posY = e.changedTouches[0].clientY
        } else if (e instanceof MouseEvent) {
            posX = e.clientX
            posY = e.clientY
        }
    
        posValues.startX = posX - posValues.deltaX
        posValues.startY = posY - posValues.deltaY
    }
    
    const dragProccessingHandler = (e: TouchEvent | MouseEvent) => {
        if (!posValues.started) return void 0
    
        e.preventDefault()
    
        let posX = 0
        let posY = 0
    
        if (window.TouchEvent && e instanceof TouchEvent) {
            posX = e.changedTouches[0].clientX
            posY = e.changedTouches[0].clientY
        } else if (e instanceof MouseEvent) {
            posX = e.clientX
            posY = e.clientY
        }
    
        posValues.currentX = posX
        posValues.currentY = posY
    
        posValues.deltaX = posValues.currentX - posValues.startX
        posValues.deltaY = posValues.currentY - posValues.startY
    
        dragTarget.style.transform = "translate3d(" + posValues.deltaX + "px, " + posValues.deltaY + "px, 0)"
    }
    
    const dragEndHandler = (e: TouchEvent | MouseEvent) => {
        if (!posValues.started || e.target as HTMLElement !== dragPoint) return void 0
        posValues.started = false
        posValues.startX = posValues.currentX
        posValues.startY = posValues.currentY
    }
    
    document.addEventListener('mousedown', dragStartHandler)
    document.addEventListener('mousemove', dragProccessingHandler)
    document.addEventListener('mouseup', dragEndHandler)
    document.addEventListener('touchstart', dragStartHandler)
    document.addEventListener('touchmove', dragProccessingHandler)
    document.addEventListener('touchend', dragEndHandler)
}

export default useDrag