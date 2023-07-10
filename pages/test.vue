<template>
    <Button @click="getUsers" class="w-fit" :loading="status == 'pending'">запрос</Button>
    <div v-if="pending">
        данные еще не пришли
    </div>
    <pre v-else>
        {{ data }}
        <div class="w-10 h-10 bg-black">

        </div>
        {{ error }}
    </pre>
</template>

<script setup>
const { data, error, status, execute: getUsers, pending } = await useFetch('/api/sites', {
    immediate: false
})

</script>
