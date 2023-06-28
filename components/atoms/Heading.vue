<template>
    <component :is="tag" :class="headingClass" class="font-bold">
        <slot />
    </component>
</template>

<script setup>
const { tag } = defineProps({
    tag: { type: String, default: "h2" },
});

const sizeClass = {
    h1: 'text-5xl md:text-[4rem]',
    h2: 'text-4xl md:text-5xl',
    h3: 'text-2xl md:text-4xl',
    h4: 'text-xl md:text-2xl',
    h5: 'text-base md:text-lg',
}

const headingClass = ref([
    sizeClass[tag],
])
</script>

