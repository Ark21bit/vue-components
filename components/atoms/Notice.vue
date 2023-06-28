<template>
    <component :is="tag" :class="noticeClass">
        <slot name="prefix" />
        <span class="grow text-center">
            <slot />
        </span>
        <slot name="suffix" />
    </component>
</template>

<script setup>
const { tag, size, color, noDefaultAttrsClass } = defineProps({
    tag: { type: String, default: 'div' },
    size: { type: [String, Boolean], default: 'M' },
    color: { type: [String, Boolean], default: 'primary' },
    noDefaultAttrsClass: { type: Boolean, default: false }
})

const noticeClasess = {
    size: {
        M: "py-1 px-2 [&_.nuxt-icon]:text-2xl text-base gap-1",
        S: "py-[3px] px-2 [&_.nuxt-icon]:text-lg text-xs gap-1"
    },
    color: {
        primary: "bg-primary text-onPrimary",
        secondary: "bg-secondary text-onSecondary",
        grayscale: "bg-lightest text-onSurface",
        success: "bg-success text-onSuccess",
        error: "bg-error text-onError",
    }
}

const noticeClass = ref([
    noDefaultAttrsClass || "flex items-center justify-between rounded",
    size && noticeClasess.size[size],
    color && noticeClasess.color[color],
])

</script>