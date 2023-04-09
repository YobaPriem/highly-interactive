const useResize = (options: {
    point: HTMLElement,
    target?: HTMLElement,
    direction: 'vertical' | 'horizontal' | 'both'
}) => {
    const dragPoint = options.point
    const dragTarget = options.target ?? dragPoint
    const direction = options.direction
    let started = false

    const sizeValues = {
        initialH: 0,
        initialW: 0
    }

    const posValues = {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        deltaX: 0,
        deltaY: 0,
    }

    const dragStartHandler = (e: TouchEvent | MouseEvent) => {
        if (e.target as HTMLElement !== dragPoint) return void 0
        started = true
    
        sizeValues.initialW = dragTarget.offsetWidth
        sizeValues.initialH = dragTarget.offsetHeight

        let posX = 0
        let posY = 0
    
        if (window.TouchEvent && e instanceof TouchEvent) {
            posX = e.changedTouches[0].clientX
            posY = e.changedTouches[0].clientY
        } else if (e instanceof MouseEvent) {
            posX = e.clientX
            posY = e.clientY
        }
    
        posValues.startX = posX
        posValues.startY = posY

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
        
        if (direction === 'horizontal' || direction === 'both') {
            dragTarget.style.width = `${sizeValues.initialW + posValues.deltaX}px`
        }
        if (direction === 'vertical' || direction === 'both') {
            dragTarget.style.height = `${sizeValues.initialH + posValues.deltaX}px`
        }
    }
    
    const dragEndHandler = () => {
        if (!started) return void 0
        started = false

        detachListeners()
    }

    const attachListeners = () => {
        document.addEventListener('mousemove', dragProccessingHandler)
        document.addEventListener('mouseup', dragEndHandler)
    }

    const detachListeners = () => {
        document.removeEventListener('mousemove', dragProccessingHandler)
        document.removeEventListener('mouseup', dragEndHandler)
    }
    
    document.addEventListener('mousedown', dragStartHandler)
}

export default useResize