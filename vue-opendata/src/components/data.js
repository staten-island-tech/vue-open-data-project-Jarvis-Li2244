import { ref } from "vue";

export const crime = ref("")

export async function crimesNYC() {
  let result = await fetch("https://data.cityofnewyork.us/resource/bqiq-cu78.json")
  let data = await result.json()
  crime.value = data;
  return crime.value
}


