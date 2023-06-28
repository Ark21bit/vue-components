<template>
    <div class="raiting-wrapper grid w-fit">
        <div class="flex text-light col-start-1 row-start-1 gap-1">
            <nuxt-icon name="star" v-for="star in scale" :style="{ fontSize: `${size}px` }"></nuxt-icon>
        </div>
        <div class="flex text-primary grid-cols-1 col-start-1 row-start-1 gap-1 overflow-hidden"
            :style="{ width: `${100 / scale * rating}%` }">
            <nuxt-icon name="star" v-for="star in scale" :style="{ fontSize: `${size}px` }"></nuxt-icon>
        </div>
    </div>
</template>

<script setup>
const { rating = 3, scale = 5, size = 16 } = defineProps({
    rating: Number,
    scale: Number,
    size: Number
})
</script>
