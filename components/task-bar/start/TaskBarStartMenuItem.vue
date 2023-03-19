<template>
    <div
        class="relative"
    >
        <div
            class="flex items-center"
            @click="toggleChildrenMenu()"
        >
            <div
                v-if="!menuItem.iconCode"
                class="w-12 h-12"
            >

            </div>
            <BaseIcon
                v-else
                classes="w-12 h-12"
                :icon-code="menuItem.iconCode"
            />
            <div
                class="ml-[3px] text-[13px] leading-3"
            >
                {{ menuItem.title }}
            </div>
            <div
                v-if="menuItem.children && menuItem.children.length"
                class="absolute top-1/2 -translate-y-1/2 right-[6px]"
            >
                <BaseIcon
                    class="w-[10px] h-[10px]"
                    icon-code="icon-arrow-right"
                />
            </div>
        </div>
        <TaskBarStartMenuGroup
            v-if="menuItem.children && menuItem.children.length && isChildrenMenuShowed"
            :start-menu-tree="menuItem.children"
            :is-children="isChildren"
            class="bg-base-gray-2 absolute top-0 right-0 shadow-base translate-x-full min-w-[150px]"
        />
    </div>
</template>

<script setup lang="ts">
import IStarMenuTreeItem from 'interfaces/start-menu-tree-item'

const props = defineProps({
    menuItem: {
        required: true,
        type: Object as PropType<IStarMenuTreeItem>
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