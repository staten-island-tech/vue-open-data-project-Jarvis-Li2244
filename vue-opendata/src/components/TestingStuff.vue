
<template>
  <div>
    <h1>Test</h1>
  </div>
</template>

<script setup>
import crimesNYC from './thing';

onMounted(() => {
  crimesNYC();
})
</script>

<style lang="css" scoped>

</style>