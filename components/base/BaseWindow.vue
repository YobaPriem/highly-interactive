<template>
    <div
        ref="self"
        class="p-[3px] shadow-base absolute flex flex-col min-w-[100px]"
        tabindex="0"
        @focus="setFocus(true)"
        @blur="setFocus(false)"
    >
        <BaseTitleBar
            ref="baseTitleBar"
            text="test fix c"
            :is-focused="isFocused"
        >
        </BaseTitleBar>
        <div
            class="bg-base-gray-2 grow"
        >

        </div>
    </div>
</template>

<script setup lang="ts">
import BaseTitleBar from './BaseTitleBar.vue'

const baseTitleBar = ref<InstanceType<typeof BaseTitleBar>>()
const self = ref<HTMLElement>()
const isFocused = ref(false)

const setFocus = (value: boolean) => {
    isFocused.value = value
}

onMounted(() => {
    if (baseTitleBar.value && self.value) {
        useDrag(baseTitleBar.value?.self, self.value)
    }
})

</script>