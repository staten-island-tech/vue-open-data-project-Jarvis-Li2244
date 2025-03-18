<template>
    <div class="w-6/7 h-1/3 flex flex-col justify-center">

        <h1 class="text-gray-200 text-[1.5vw]">Placeholder:</h1>
        <div class="w-full h-1/2 flex justify-evenly items-center ml-3 mt-3">
        <i class="pi pi-map-marker text-white text-[1.5vw] rounded-[50%] bg-gray-700 p-3"></i>
        <select :value="modelValue" @change=update_selectedValue class="w-full h-4/5 m-3 text-gray-200 bg-slate-400 rounded-lg focus:outline-none focus:border-slate-800 focus:ring-2 focus:ring-slate-800 shadow-sm hover:bg-slate-600 text-center text-[1vw]">
            <option v-for="Placeholder in Placeholder">Test1</option>
            <option>Test2</option>
            <option>Test3</option>
        </select>
        </div>

    </div>
</template>

<script setup>
const props = defineProps({
    selection: Object
})

const emit = defineEmits(['update:modelValue'])

function update_selectedValue(event) {
    emit('update:modelValue', event.target.value)
}

</script>

<style lang="css" scoped>

</style>