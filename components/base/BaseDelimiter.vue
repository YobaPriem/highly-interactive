<template>
    <div
        class="bg-white border-base-gray-4"
        :class="{
            'my-[3px] h-[2px] border-t': type === 'horizontal',
            'mx-[3px] w-[2px] border-l': type === 'vertical'
        }"
    >
    </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'

defineProps({
    type: {
        required: true,
        type: String as PropType<'vertical' | 'horizontal'>,
    }
})
</script>