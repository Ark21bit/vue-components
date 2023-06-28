<template>
    <div>
        <UseDark v-slot="{ isDark, toggleDark }">
            <button @click="toggleDark()">
                <Icon name="fluent:dark-theme-20-regular" class="text-2xl dark:text-white text-black" />
            </button>
        </UseDark>
    </div>
</template>

<script setup>
 import { UseDark } from '@vueuse/components'
</script>

