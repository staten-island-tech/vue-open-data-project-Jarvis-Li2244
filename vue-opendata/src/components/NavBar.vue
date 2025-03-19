<template>
    <div class="navbar w-full flex justify-center items-center">
      
      <div class="w-1/3 h-4/5 bg-slate-500 rounded-xl font-serif flex justify-evenly items-center">
        <RouterLink to="/" class="pi pi-home text-white text-[1vw] hover:cursor-pointer transition-transform transform hover:scale-125 hover:bg-gray-600 rounded-[50%] p-3"></RouterLink>
        <RouterLink to="/about/piechart" class="pi pi-chart-pie text-white text-[1vw] hover:cursor-pointer transition-transform transform hover:scale-125 hover:bg-gray-600 rounded-[50%] p-3"></RouterLink>
        <RouterLink to="/about/barchart" class="pi pi-chart-bar text-white text-[1vw] hover:cursor-pointer transition-transform transform hover:scale-125 hover:bg-gray-600 rounded-[50%] p-3"></RouterLink>
        <RouterLink to="/about/timechart" class="pi pi-calendar text-white text-[1vw] hover:cursor-pointer transition-transform transform hover:scale-125 hover:bg-gray-600 rounded-[50%] p-3"></RouterLink>
      </div>

    </div>
</template>

<script setup>

</script>

<style lang="css" scoped>
.navbar{
  height: 10vh;
}
</style>