const useDrag = (options: {
    point: HTMLElement,
    target?: HTMLElement,
    direction: 'horizontal' | 'vertical' | 'both'
}) => {
    const dragPoint = options.point
    const dragTarget = options.target ?? dragPoint
    const direction = options.direction
    let started = false

    const posValues = {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        deltaX: 0,
        deltaY: 0,
    }

    console.log(dragPoint)
    console.log(dragTarget)

    const dragStartHandler = (e: TouchEvent | MouseEvent) => {
        if (e.target as HTMLElement !== dragPoint) return void 0
        started = true
    
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

        attachListeners()
    }
    
    const dragProccessingHandler = (e: TouchEvent | MouseEvent) => {
        if (!started) return void 0
    
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
        
        if (direction === 'both') {
            dragTarget.style.transform = "translate3d(" + posValues.deltaX + "px, " + posValues.deltaY + "px, 0)"
        } else if (direction === 'vertical') {
            dragTarget.style.transform = "translateY(" + posValues.deltaY + "px)"
        } else if (direction === 'horizontal') {
            dragTarget.style.transform = "translateX(" + posValues.deltaX + "px)"
        }
    }
    
    const dragEndHandler = (e: TouchEvent | MouseEvent) => {
        if (!started || e.target as HTMLElement !== dragPoint) return void 0
        started = false
        posValues.startX = posValues.currentX
        posValues.startY = posValues.currentY

        detachListeners()
    }

    const attachListeners = () => {
        document.addEventListener('mousemove', dragProccessingHandler)
        document.addEventListener('mouseup', dragEndHandler)
        document.addEventListener('touchmove', dragProccessingHandler)
        document.addEventListener('touchend', dragEndHandler)
    }

    const detachListeners = () => {
        document.removeEventListener('mousemove', dragProccessingHandler)
        document.removeEventListener('mouseup', dragEndHandler)
        document.removeEventListener('touchmove', dragProccessingHandler)
        document.removeEventListener('touchend', dragEndHandler)
    }
    
    document.addEventListener('mousedown', dragStartHandler)
    document.addEventListener('touchstart', dragStartHandler)
}

export default useDrag