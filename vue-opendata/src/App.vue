<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/TestingStuff.vue'
</script>

<template>
  <header>
    
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
      
  </header>

  <RouterView />
</template>

<style scoped>

</style>
