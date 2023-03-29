const useSwapElements = (replacer: HTMLElement, target: HTMLElement) => {
    const tempElement = document.createElement('div')

    replacer.before(tempElement)
    target.before(replacer)
    tempElement.replaceWith(target)
}

export default useSwapElements