<template>
    <div
        ref="self"
        class="p-[3px] shadow-window absolute"
        tabindex="0"
        @focus="setFocus(true)"
        @blur="setFocus(false)"
    >
        <div
            class="bg-base-gray-2"
        >

        </div>
        <BaseTitleBar
            :is-focused="isFocused"
        >
            <template #title>
                <BaseTitleBarTitle
                    text="test"
                >
                    <template #icon>
                        <BaseIcon icon-code="buttons/restore"/>
                    </template>
                </BaseTitleBarTitle>
            </template>
            <template #buttons>
                jopa
            </template>
        </BaseTitleBar>
    </div>
</template>

<script setup lang="ts">

const self = ref<HTMLElement | null>(null)
const isFocused = ref(false)

const setFocus = (value: boolean) => {
    isFocused.value = value
}

onMounted(() => {
    if (self.value) useDrag(self.value)
})

</script>