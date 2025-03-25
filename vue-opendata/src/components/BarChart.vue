<template>
  <Doughnut :options="chartOptions" :data="chartData" />
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { crime } from './data'
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, ArcElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, ArcElement, CategoryScale, LinearScale)

const labels = ref([])

function getData(filter, crime) {
  labels.value = []
  crime.forEach((item) => {
    let label = item[filter]
    labels.value[label] = (labels.value[label] || 0) + 1
  })
}

watch(crime, (newCrimeValue) => {
  if (newCrimeValue) {
    getData('offense_description', newCrimeValue)
  }
})

if (crime.value) {
  getData('offense_description', crime.value)
}

const chartData = computed(() => ({
  labels: Object.keys(labels.value),
  datasets: [
    {
      data: Object.values(labels.value),
      backgroundColor: ['rgb(54, 162, 235)', 'rgb(75, 192, 192)', 'rgb(153, 102, 255)'],
      borderColor: ['rgb(54, 162, 235)', 'rgb(75, 192, 192)', 'rgb(153, 102, 255)'],
      borderWidth: 1,
      hoverOffset: 10,
    },
  ],
}))

const chartOptions = ref({
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Crimes based on Crime Category',
      color: 'rgb(255, 255, 255)',
      font: {
        size: 32,
        weight: 'bold',
        family: 'Serif',
      },
    },
  },
})
</script>