<template>
    <div
        class="relative"
        v-click-outside="() => toggleStart(false)"
    >
        <BaseButton
            @click="toggleStart()"
        >
            <BaseIcon
                icon-code="icon-small-start"
            />
            <span class="uppercase text-task-bar font-bold ml-1">Start</span>
        </BaseButton>
        <Transition>
        <TheTaskBarStartMenu
            v-if="isStartOpened"
        />
        </Transition>
    </div>
</template>

<script setup lang="ts">
let isStartOpened = ref(false)

const toggleStart = (forcedValue?: boolean) => {
    if (forcedValue !== undefined) {
        isStartOpened.value = forcedValue
    } else {
        isStartOpened.value = !isStartOpened.value
    }
}

</script>

<style scoped>
.v-enter-active {
  transition: max-height 0.25s ease-in;
  max-height: 999px;
  overflow: hidden;
}
.v-enter-from {
  max-height: 0px;
}
</style>