<template>
    <div
        class="min-h-[1.25rem] max-h-5 px-[3px] py-1 bg-gradient-bar flex justify-between items-center"
        :class="{
            'bg-gradient-bar-blue': focused
        }"
        ref="self"
    >
        <BaseIcon
            v-if="iconCode"
            :icon-code="iconCode"
        />
        <div
            class="text-title font-bold text-white pointer-events-none"
        >
            {{ title }}
        </div>
        <BaseButton
            :hide-paddings="true"
        >
            <BaseIcon
                icon-code="icon-buttons-close"
            />
        </BaseButton>
    </div>
</template>

<script setup lang="ts">
const self = ref<HTMLElement>()

defineProps({
    title: {
        required: true,
        type: String,
    },
    focused: {
        required: false,
        type: Boolean,
        default: false
    },
    iconCode: {
        required: false,
        type: String,
        default: ''
    },
})

defineExpose({
    self
})

</script>