<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="page">

    <div class="display w-full flex justify-evenly items-center">
      
      <div class="inputs w-3/7 h-9/10 bg-black p-3">

        <div class="title w-full h-1/10 bg-white flex justify-center items-center font-serif font-bold underline text-fuchsia-700">
          <h1 class="text-[3vw]">Hate Crimes of NYC</h1>
        </div>

        <div class="items w-full h-9/10 flex justify-center items-center">

          <div class="dropdowns w-1/2 h-full flex justify-center items-start">
            <!-- dropdown component used thrice -->
            <select class="text-fuchsia-500 bg-white rounded-lg focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 shadow-sm hover:bg-gray-100">
              <option value="test1">Test1</option>
              <option value="test2">Test2</option>
              <option value="test3">Test3</option>
            </select>

          </div>

          <div class="data">

          </div>

        </div>
        
      </div>
      <div class="views w-3/7 h-9/10 bg-gray-800 p-3">
        <RouterView/>
      </div>
    </div>

    <div class="navbar w-full flex justify-center items-center">
      
      <div class="w-1/3 h-4/5 bg-slate-500 rounded-xl font-serif flex justify-evenly items-center">
        <RouterLink to="/" class="pi pi-home text-white text-[1vw] hover:cursor-pointer transition-transform transform hover:scale-125 hover:bg-gray-600 rounded-[50%] p-3"></RouterLink>
        <RouterLink to="/about/piechart" class="pi pi-chart-pie text-white text-[1vw] hover:cursor-pointer transition-transform transform hover:scale-125 hover:bg-gray-600 rounded-[50%] p-3"></RouterLink>
        <RouterLink to="/about/barchart" class="pi pi-chart-bar text-white text-[1vw] hover:cursor-pointer transition-transform transform hover:scale-125 hover:bg-gray-600 rounded-[50%] p-3"></RouterLink>
        <RouterLink to="/about/timechart" class="pi pi-calendar text-white text-[1vw] hover:cursor-pointer transition-transform transform hover:scale-125 hover:bg-gray-600 rounded-[50%] p-3"></RouterLink>
      </div>

    </div>

  </div>
</template>

<style scoped>
.page{
  background-color: rgb(70, 70, 100);
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
