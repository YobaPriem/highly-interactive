import {
    DirectiveBinding
} from '@vue/runtime-core'

type ClickFunction = (event: Event) => void

interface HTMLElementWithClick extends HTMLElement {
    clickFunction: ClickFunction
}

const clickOutside = (el: HTMLElementWithClick, binding: DirectiveBinding<Function>): ClickFunction => {
    return e => {
        const target = e.target as HTMLElementWithClick

        if(!(el === target || el.contains(target))) {
            binding.value(e)
        }
    }
}

export default defineNuxtPlugin(app => {
    app.vueApp.directive('click-outside', {
        beforeMount: (
            el: HTMLElementWithClick,
            binding: DirectiveBinding<Function>
        ):void =>  {
            el.clickFunction = clickOutside(el, binding)

            window.addEventListener('click', el.clickFunction)
        },
        beforeUnmount: (
            el: HTMLElementWithClick,
        ):void => {
            window.removeEventListener('click', el.clickFunction)
        }
    })
})