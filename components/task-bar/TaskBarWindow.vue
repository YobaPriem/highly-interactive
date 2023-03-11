<template>
    <BaseButton
        @click="windowComponent.setStatus('opened')"
        @focus="windowComponent.setFocus(true)"
        @blur="windowComponent.setFocus(false)"
        :active="windowComponent.isFocused"
    >
        <BaseIcon
            class="mr-1"
            v-if="windowComponent.icon"
            :icon-code="windowComponent.icon"
        />
        <span
            class="text-task-bar"
        >
            {{ windowComponent.title }}
        </span>
    </BaseButton>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { IWindowComponent } from '~~/interfaces/window'

const props = defineProps({
    windowComponent: {
        required: true,
        type: Object as PropType<IWindowComponent>
    }
})

</script>