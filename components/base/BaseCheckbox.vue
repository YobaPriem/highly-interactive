<template>
    <label
        class="flex items-center"
    >
        <input
            class="hidden"
            type="checkbox"
            :name="name"
            :value="modelValue"
            @change="onChange"
        >
        <div
            class="
                w-[13px]
                h-[13px]
                bg-white
                shadow-base-checkbox
                relative
                pointer-events-none
            "
        >
            <BaseIcon
                v-if="modelValue"
                classes="
                    absolute
                    top-1/2
                    left-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                    w-[7px]
                    h-[7px]
                "
                icon-code="icon-checked"
            />
        </div>
        <span
            v-if="title"
            class="ml-[6px] text-task-bar pointer-events-none"
        >
            {{ title }}
        </span>
    </label>
</template>

<script setup lang="ts">

const emit = defineEmits(['update:modelValue'])

defineProps({
    name: {
        required: true,
        type: String
    },
    modelValue: {
        required: true,
        type: Boolean
    },
    title: {
        required: false,
        type: String,
        default: ''
    }
})

const onChange = ($event: Event): void => {
    emit('update:modelValue', ($event.target as HTMLInputElement).checked)
} 

</script>