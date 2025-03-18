<template>
    <div v-for="(item, index) in crime" :key="index">
        <h1 class="text-[0.7vw] text-gray-200 p-4 font-serif font-normal">{{ item }}</h1>
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import { crime, crimesNYC } from "./data.js";


</script>

<style lang="css" scoped>

</style>