<template>
    <BaseDelimiter
        type="vertical"
    />
    <div
        ref="resizable"
        class="flex items-center gap-x-[3px] justify-between"
    >
        <BaseMover/>
        
        <BaseMover
            ref="baseMover"
        />
    </div>
    <BaseDelimiter
        type="vertical"
    />
</template>

<script setup lang="ts">
import BaseMover from '../base/BaseMover.vue'

const resizable = ref<HTMLElement>()
const baseMover = ref<InstanceType<typeof BaseMover>>()

onMounted(() => {
    if (baseMover.value && baseMover.value.self && resizable.value) {
        useResize({
            point: baseMover.value.self,
            target: resizable.value,
            direction: 'horizontal'
        })
    }
})
</script>