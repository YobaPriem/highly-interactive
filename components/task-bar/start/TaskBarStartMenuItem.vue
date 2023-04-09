<template>
    <div
        class="relative"
    >
        <BaseDelimiter
            v-if="menuItem.attributes.startTreeDelimiter === 'top'"
            type="horizontal"
        />
        <div
            class="flex items-center"
            @click="toggleChildrenMenu()"
        >
            <div
                v-if="!menuItem.attributes.iconCode"
                :class="!isChildren ? 'w-12 h-12 p-2' : 'w-[22px] h-[22px] p-[3px]'"
            ></div>
            <BaseIcon
                v-else
                :classes="!isChildren ? 'w-12 h-12 p-2' : 'w-[22px] h-[22px] p-[3px]'"
                :icon-code="menuItem.attributes.iconCode"
            />
            <div
                :class="!isChildren ? 'ml-[3px] text-[13px] leading-3' : 'ml-1 text-title'"
            >
                {{ menuItem.attributes.title }}
            </div>
            <div
                v-if="menuItem.attributes.children.length"
                class="absolute top-1/2 -translate-y-1/2 right-[6px]"
            >
                <BaseIcon
                    classes="w-[10px] h-[10px]"
                    icon-code="icon-arrow-right"
                />
            </div>
        </div>
        <TaskBarStartMenuGroup
            v-if="menuItem.attributes.children.length && isChildrenMenuShowed"
            :group="menuItem"
            :is-children="true"
            class="bg-base-gray-2 absolute top-0 right-0 shadow-base translate-x-full min-w-[150px]"
        />
        <BaseDelimiter
            v-if="menuItem.attributes.startTreeDelimiter === 'bottom'"
            type="horizontal"
        />
    </div>
</template>

<script setup lang="ts">
import { IFilesystemItem } from '~/interfaces/filesystem-item'

defineProps({
    menuItem: {
        required: true,
        type: Object as PropType<IFilesystemItem>
    },
    isChildren: {
        required: false,
        type: Boolean,
        default: false
    }
})

let isChildrenMenuShowed = ref(false)

const toggleChildrenMenu = () => {
    isChildrenMenuShowed.value = !isChildrenMenuShowed.value
}

</script>