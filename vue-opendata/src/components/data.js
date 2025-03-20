import { ref } from "vue";

export const crime = ref("")

export async function crimesNYC(county, offense_category, crime_category) {
  let result = await fetch("https://data.cityofnewyork.us/resource/bqiq-cu78.json")
  let data = await result.json()
  crime.value = data
    .filter(item => county == 'ALL' || item.county.toLowerCase() == county.toLowerCase())
    .filter(item => offense_category == 'ALL' || item.offense_category.toLowerCase() == offense_category.toLowerCase())
    .filter(item => crime_category == 'ALL' || item.law_code_category_description.toLowerCase() == crime_category.toLowerCase());
  return crime.value
}


