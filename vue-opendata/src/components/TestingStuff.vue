
<template>
  <div class="w-full h-full flex justify-center items-center">
    <div class="w-1/2 h-1/10 bg-gray-500 rounded-lg font-serif flex justify-evenly items-center">
      <i class="pi pi-home"></i>
      <i class="pi pi-chart-pie"></i>
      <i class="pi pi-chart-bar"></i>
      <i class="pi pi-calendar"></i>
    </div>
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