<template>
  <div>
    <h1>Hello</h1>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const crime = ref("")

async function crimesNYC () {
  let result = await fetch("https://data.cityofnewyork.us/resource/bqiq-cu78.json")
  let data = await result.json()
  crime.value = data.results;
  console.log(crime)
}

onMounted(() => {
  crimesNYC();
})

</script>

<style lang="css" scoped>

</style>