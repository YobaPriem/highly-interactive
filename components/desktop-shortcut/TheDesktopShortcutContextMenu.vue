<template>
    <ul
        class="absolute right-0 bottom-0 shadow-base bg-base-gray-3 text-title px-[3px] py-[6px] translate-y-3/4 translate-x-3/4 z-10"
    >
        <li
            class="px-[21px]  text-base-gray-4"
            @click="handleRestore"
        >
            Restore            
        </li>
        <BaseDelimiter
            type="horizontal"
        />
        <li
            class="px-[21px] text-base-gray-4"
        >
            Cut            
        </li>
        <BaseDelimiter
            type="horizontal"
        />
        <li
            class="px-[21px] text-base-gray-4"
        >
            Delete            
        </li>
        <BaseDelimiter
            type="horizontal"
        />
        <li
            class="px-[21px] text-base-gray-4"
        >
            Properties            
        </li>
    </ul>
</template>

<script lang="ts" setup>

const emit = defineEmits<{
    (e: 'restore'): void
}>()

const handleRestore = () => {
    emit('restore')
}
</script>