<template>
    
    <div class="w-6/7 h-1/3 flex flex-col justify-center">

        <h1 class="text-gray-200 text-[1.5vw]">{{ selection.title }}</h1>
        <div class="w-full h-1/2 flex justify-evenly items-center ml-3 mt-3">
        <i :class=selection.icon class="pi text-white text-[1.5vw] rounded-[50%] bg-gray-700 p-3"></i>
        <select :value="modelValue" @change=update_selectedValue class="w-full h-4/5 m-3 p-1 text-gray-200 bg-slate-400 rounded-lg focus:outline-none focus:border-slate-800 focus:ring-2 focus:ring-slate-800 shadow-sm hover:bg-slate-600 text-center text-[1.25vw]">
            <option v-for="option in selection.options" :value="option">{{ option.toUpperCase() }}</option>
        </select>
        </div>

    </div>
    
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    selection: Object
})

const modelValue = ref('ALL')
const emit = defineEmits(['update:modelValue'])

function give_selectedValue(event) {
    emit('update:modelValue', event.value)
}

function update_selectedValue(event) {
    emit('update:modelValue', event.target.value)
}

give_selectedValue(modelValue)
</script>

<style lang="css" scoped>

</style>