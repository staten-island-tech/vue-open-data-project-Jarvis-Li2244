<template>
    
    <div v-for="(item, index) in JSON.stringify(crime, null, 2)" :key="index">
        <ul class="text-[0.7vw] text-gray-200 p-4 font-serif font-normal">{{ item }}</ul>
    </div>
    
</template>

<script setup>
import { crime } from "./data.js";

</script>

<style lang="css" scoped>

</style>