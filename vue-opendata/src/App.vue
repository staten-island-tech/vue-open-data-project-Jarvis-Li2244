<script setup>
import { reactive } from 'vue';
import { crimesNYC } from './components/data';
import { RouterView } from 'vue-router'
import DataBox from './components/DataBox.vue';
import DropdownButton from './components/DropdownButton.vue';
import NavBar from './components/NavBar.vue';

const selections = reactive([
  {
    title: "County",
    icon: "pi-map-marker",
    options: ['ALL', 'BRONX', 'KINGS', 'NEW YORK', 'QUEENS', 'RICHMOND'],
    value: 'ALL'
  },
  {
    title: "Offense Category",
    icon: "pi-users",
    options: ['ALL', 'Religion/Religious Practice', 'Sexual Orientation', 'Race/Color', 'Gender', 'Ethnicity/National Origin/Ancestry', 'Unclassified'],
    value: 'ALL'
  },
  {
    title: "Crime Category",
    icon: "pi-folder",
    options: ['ALL', 'FELONY', 'MISDEMEANOR', 'VIOLATION', 'INVESTIGATION'],
    value: 'ALL'
  }
])

crimesNYC(selections[0].value, selections[1].value, selections[2].value)

</script>

<template>
  <div class="page">

    <div class="display w-full flex justify-evenly items-center">
      
      <div class="inputs w-3/7 h-9/10 p-3 bg-slate-500 rounded-lg shadow-md">

        <div class="textcolor w-full h-2/10 flex flex-col justify-center items-center font-serif font-normal">
          <h1 class="text-[3vw] font-bold underline">Hate Crimes</h1>
          <h2 class="text-[1vw]">in NYC</h2>
        </div>

        <div class="items w-full h-8/10 flex justify-center items-center">

          <div class="dropdowns w-1/2 h-full flex flex-col justify-evenly items-center">
            
            <DropdownButton 
              v-for="selection in selections" 
              :key="selection.title" 
              :selection="selection"
              v-model="selectionValue"
              @change="selection.value = selectionValue, crimesNYC(selections[0].value, selections[1].value, selections[2].value)"
            />
            
          </div>

          <div class="data w-1/2 h-full p-3">
            
            <div class="scroll w-full h-full rounded-lg bg-slate-600/75">
              <DataBox/>
            </div>

          </div>

        </div>
        
      </div>

      <div class="views w-3/7 h-9/10 p-3 bg-slate-500 rounded-lg shadow-md">

        <RouterView/>

      </div>

    </div>

    <NavBar/>
    
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
