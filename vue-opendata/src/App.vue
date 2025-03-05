<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="page">

    <div class="display w-full flex justify-center items-center">
      <RouterView/>
    </div>

    <div class="navbar w-full flex justify-center items-center">
      
      <div class="w-1/2 h-1/2 bg-gray-500 rounded-xl font-serif flex justify-evenly items-center">
        <RouterLink to="/" class="pi pi-home"></RouterLink>
        <i class="pi pi-chart-pie"></i>
        <i class="pi pi-chart-bar"></i>
        <i class="pi pi-calendar"></i>
      </div>

    </div>
  </div>
</template>

<style scoped>
.page{
  background-color: rgb(255, 255, 255);
  width: 100vw;
  height: 100vh;
}
.display{
  height: 90vh;
}
.navbar{
  height: 10vh;
}
</style>
