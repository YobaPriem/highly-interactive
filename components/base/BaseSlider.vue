<template>
    <div
        class="flex relative items-center"
        :class="{
            'min-h-[50px] w-[21px] flex-col': type === 'vertical',
            'min-w-[50px] h-[21px]': type === 'horizontal'
        }"
    >
        <div
            class="shadow-base-slider-track"
            :class="{
                'h-full w-[3px]': type === 'vertical',
                'w-full h-[3px]': type === 'horizontal',
            }"
        >
        </div>
        <div
            ref="handle"
            class="absolute bg-base-gray-2 cursor-grab"
            :class="{
                'top-0 left-[1px] w-[21px] h-[11px] shadow-base-slider-handle-vertical': type === 'vertical',
                'left-0 top-[1px] w-[11px] h-[21px] shadow-base-slider-handle-horizontal': type === 'horizontal',
            }"
        >
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    type: {
        required: true,
        type: String as PropType<'vertical' | 'horizontal'>,
    }
})

const handle = ref<HTMLElement>()

onMounted(() => {
    if (handle.value) {
        useDrag({
            point: handle.value,
            direction: 'vertical'
        })
    }
})

</script>