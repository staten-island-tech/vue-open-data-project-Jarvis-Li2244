<template>
    <div v-for="(item, index) in crime" :key="index">
        <h1 class="text-[0.7vw] text-gray-200 p-4 font-serif font-normal">{{ item }}</h1>
    </div>
</template>

<script setup>
import { crime } from "./data.js";

let array = []

for (let i = 0; i < crime.value.length; i++) {
    if (array.includes(crime.value[i].law_code_category_description)) {
    } else {
        array.push(crime.value[i].law_code_category_description)
    }
    console.log(crime.value[i].law_code_category_description, "thing")
};

console.log(array)

</script>

<style lang="css" scoped>

</style>