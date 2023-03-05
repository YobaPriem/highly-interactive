<template>
    <div
        ref="self"
        class="p-[3px] shadow-window absolute flex flex-col min-w-[100px]"
        tabindex="0"
        @focus="setFocus(true)"
        @blur="setFocus(false)"
    >
        <BaseTitleBar
            ref="baseTitleBar"
            :is-focused="isFocused"
        >
            <template #left>
                <BaseTitleBarLeft
                    text="test"
                >
                    <template #icon>
                        <BaseIcon icon-code="buttons/restore"/>
                    </template>
                </BaseTitleBarLeft>
            </template>
            <template #right>
                jopa
            </template>
        </BaseTitleBar>
        <div
            class="bg-base-gray-2 grow"
        >

        </div>
    </div>
</template>

<script setup lang="ts">
import BaseTitleBar from './title-bar/BaseTitleBar.vue'

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