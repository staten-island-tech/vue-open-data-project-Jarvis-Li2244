import { ref } from "vue";

const crime = ref("")

export default async function crimesNYC() {
  let result = await fetch("https://data.cityofnewyork.us/resource/bqiq-cu78.json")
  let data = await result.json()
  crime.value = data.results;
  return crime.value
}


