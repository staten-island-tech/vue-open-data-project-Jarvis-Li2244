<script setup>
import { crime, crimesNYC } from './components/data';
import { RouterLink, RouterView } from 'vue-router'
import DataBox from './components/DataBox.vue';

crimesNYC()

</script>

<template>
  <div class="page">

    <div class="display w-full flex justify-evenly items-center">
      
      <div class="inputs w-3/7 h-9/10 p-3 bg-slate-500 rounded-lg shadow">

        <div class="textcolor w-full h-2/10 flex justify-center items-center font-serif font-bold underline">
          <h1 class="text-[3vw]">Hate Crimes of NYC</h1>
        </div>

        <div class="items w-full h-8/10 flex justify-center items-center">

          <div class="dropdowns w-1/2 h-full flex flex-col justify-evenly items-center">
            <!-- dropdown component used thrice -->
            <div class="w-6/7 h-1/3 flex flex-col justify-center">

              <h1 class="text-gray-200 text-[1.5vw]">Placeholder:</h1>
              <div class="w-full h-1/2 flex justify-evenly items-center ml-3 mt-3">
                <i class="pi pi-map-marker text-white text-[1.5vw] rounded-[50%] bg-gray-700 p-3"></i>
                <select @change=crimesNYC() class="w-full h-4/5 m-3 text-gray-200 bg-slate-400 rounded-lg focus:outline-none focus:border-slate-800 focus:ring-2 focus:ring-slate-800 shadow-sm hover:bg-slate-600 text-center text-[1vw]">
                  <option value="test1">Test1</option>
                  <option value="test2">Test2</option>
                  <option value="test3">Test3</option>
                </select>
              </div>

            </div>

            <div class="w-6/7 h-1/3 flex flex-col justify-evenly">

              <h1 class="text-gray-200 text-[1.5vw]">Placeholder:</h1>
              <div class="w-full h-1/2 flex justify-evenly items-center ml-3 mt-3">
                <i class="pi pi-users text-white text-[1.5vw] rounded-[50%] bg-gray-700 p-3"></i>
                <select class="w-full h-4/5 m-3 text-gray-200 bg-slate-400 rounded-lg focus:outline-none focus:border-slate-800 focus:ring-2 focus:ring-slate-800 shadow-sm hover:bg-slate-600 text-center text-[1vw]">
                  <option value="test1">Test1</option>
                  <option value="test2">Test2</option>
                  <option value="test3">Test3</option>
                </select>
              </div>

            </div>

            <div class="w-6/7 h-1/3 flex flex-col justify-evenly">

              <h1 class="text-gray-200 text-[1.5vw]">Placeholder:</h1>
              <div class="w-full h-1/2 flex justify-evenly items-center ml-3 mt-3">
                <i class="pi pi-folder text-white text-[1.5vw] rounded-[50%] bg-gray-700 p-3"></i>
                <select class="w-full h-4/5 m-3 text-gray-200 bg-slate-400 rounded-lg focus:outline-none focus:border-slate-800 focus:ring-2 focus:ring-slate-800 shadow-sm hover:bg-slate-600 text-center text-[1vw]">
                  <option value="test1">Test1</option>
                  <option value="test2">Test2</option>
                  <option value="test3">Test3</option>
                </select>
              </div>

            </div>

          </div>

          <div class="data w-1/2 h-full p-3">
            
            <div class="scroll w-full h-full rounded-lg bg-slate-600/75">
              <DataBox/>
            </div>

          </div>

        </div>
        
      </div>
      <div class="views w-3/7 h-9/10 p-3">
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
.textcolor{
  color: rgb(255, 255, 255);
}
.dropdown{
  border-color: rgb(61, 61, 87);
  border-width: 0.3vw;
}
.scroll{
  overflow-y: scroll;
  scrollbar-width: none;
}
</style>
