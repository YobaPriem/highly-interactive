<template>
    <div
        class="relative"
        :class="{
            'min-h-[50px] w-[21px]': type === 'vertical',
            'min-w-[50px] h-[21px]': type === 'horizontal'
        }"
    >
      <div
        class="range-input"
        :class="{
            'range-input--vertical': type === 'vertical'
        }"
        ref="slider"
      >

      </div>
    </div>
</template>

<script setup lang="ts">
// TODO: на скорую руку накидал, перенести прям подключение к стору в пропсы
import noUiSlider from 'nouislider'
import 'nouislider/dist/nouislider.css'
import { useTaskBarStore } from '~/stores/taskbar'

const store = useTaskBarStore()

const props = defineProps({
    type: {
        required: true,
        type: String as PropType<'vertical' | 'horizontal'>,
    }
})

const slider = ref<HTMLElement>()

onMounted(() => {
    if (slider.value) {
        const sliderInstance = noUiSlider.create(slider.value, {
            start: store.soundLevel,
            orientation: props.type,
            step: 1,
            direction: 'rtl',
            range: {
                min: 0,
                max: 100
            }
        })

        sliderInstance.on('end', (e) => {
            const value = Number(e[0])
            store.setSoundLevel(value)
        })
    }
})
</script>