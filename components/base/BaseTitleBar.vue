<template>
    <div
        class="min-h-[1.25rem] max-h-5 px-[3px] py-1 bg-gradient-bar flex justify-between items-center"
        :class="{
            'bg-gradient-bar-blue': isFocused
        }"
        ref="self"
    >
        <BaseIcon
            v-if="iconCode"
            :icon-code="iconCode"
        />
        <div
            class="text-title-bar font-bold text-white pointer-events-none"
        >
            {{ text }}
        </div>
        <BaseButton>
            <BaseIcon
                icon-code="icon-buttons-close"
            />
        </BaseButton>
    </div>
</template>

<script setup lang="ts">
import 'virtual:svg-icons-register'
const self = ref()

defineProps({
    text: {
        required: true,
        type: String,
    },
    isFocused: {
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