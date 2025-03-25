<template>
  <Pie
    :options="chartOptions"
    :data="chartData"
  />
</template>

<script setup>
import { ref, computed } from 'vue'
import { getData, crime, labels } from './data'
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, ArcElement, CategoryScale, LinearScale } from 'chart.js'

computed
getData('bias_motive_description', crime)

ChartJS.register(Title, Tooltip, ArcElement, CategoryScale, LinearScale)

const chartData = ref({
  labels: Object.keys(labels.value),
  datasets: [
    {
      data: Object.values(labels.value),
      backgroundColor: ['rgb(54, 162, 235)', 'rgb(75, 192, 192)', 'rgb(153, 102, 255)'],
      borderColor: ['rgb(54, 162, 235)', 'rgb(75, 192, 192)', 'rgb(153, 102, 255)'],
      borderWidth: 1,
      hoverOffset: 10
    }
  ]
})

const chartOptions = ref({
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Crimes based on Group Targetted',
      color: 'rgb(255, 255, 255)',
      font: {
        size: 32, 
        weight: 'bold', 
        family: 'Serif',  
      }
    }
  }
})

console.log(labels.value)
</script>
