interface UseMoveThresholds {
    minX?: number
    maxX?: number
    minY?: number
    maxY?: number
}

const useMove = (options: {
    point: HTMLElement,
    direction: 'horizontal' | 'vertical' | 'both',
    target?: HTMLElement,
    thresholds?: UseMoveThresholds
}) => {
    const movePoint = options.point
    const moveTarget = options.target ?? movePoint
    const direction = options.direction
    const thresholds = options.thresholds

    let started = false

    const posValues = {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        deltaX: 0,
        deltaY: 0,
    }

    const moveStartHandler = (e: TouchEvent | MouseEvent) => {
        if (e.target as HTMLElement !== movePoint) return void 0

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
    
    const moveProccessingHandler = (e: TouchEvent | MouseEvent) => {
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
        
        if (thresholds?.minX !== undefined && posValues.deltaX < thresholds.minX) posValues.deltaX = thresholds.minX
        if (thresholds?.maxX !== undefined && posValues.deltaX > thresholds.maxX) posValues.deltaX = thresholds.maxX
        if (thresholds?.minY !== undefined && posValues.deltaY < thresholds.minY) posValues.deltaY = thresholds.minY
        if (thresholds?.maxY !== undefined && posValues.deltaY > thresholds.maxY) posValues.deltaY = thresholds.maxY

        if (direction === 'both') {
            moveTarget.style.transform = "translate3d(" + posValues.deltaX + "px, " + posValues.deltaY + "px, 0)"
        } else if (direction === 'vertical') {
            moveTarget.style.transform = "translateY(" + posValues.deltaY + "px)"
        } else if (direction === 'horizontal') {
            moveTarget.style.transform = "translateX(" + posValues.deltaX + "px)"
        }
    }
    
    const moveEndHandler = (e: TouchEvent | MouseEvent) => {
        if (!started || e.target as HTMLElement !== movePoint) return void 0
        started = false
        posValues.startX = posValues.currentX
        posValues.startY = posValues.currentY

        detachListeners()
    }

    const attachListeners = () => {
        document.addEventListener('mousemove', moveProccessingHandler)
        document.addEventListener('mouseup', moveEndHandler)
        document.addEventListener('touchmove', moveProccessingHandler)
        document.addEventListener('touchend', moveEndHandler)
    }

    const detachListeners = () => {
        document.removeEventListener('mousemove', moveProccessingHandler)
        document.removeEventListener('mouseup', moveEndHandler)
        document.removeEventListener('touchmove', moveProccessingHandler)
        document.removeEventListener('touchend', moveEndHandler)
    }
    
    document.addEventListener('mousedown', moveStartHandler)
    document.addEventListener('touchstart', moveStartHandler)
}

export default useMove
export {UseMoveThresholds}
