<template>
    <div>


    <input
        class="form-control mb-3"
        placeholder="Fecha inicial"
        type="month"
        v-model="month_year"
        autofocus
    />
    <input 
          type="number"
          v-model="esCompare"  
          class="form-control mb-3"
    />

    <button @click="getCategories()">Get Categories</button>
</div>
<div>
    <ul class="list-group">
        <h1> Lista {{ currentDatas.length }}</h1>    
        <li
            class="list-group-item list-group-item-action p-4"
            v-for="(currentData, index) in currentDatas"
            v-bind:key="index"
        >
        {{  currentData.avgEsfuerzo }}
    </li>
    </ul>
</div>
</template>

<script lang="ts">
import { DataInfo } from "@/interfaces/Data";
import {getInfo} from "@/services/TaskService";
import {defineComponent} from "vue";
export default defineComponent({
    name: "data-list",
    data() {
        return{
            currentDatas: [] as DataInfo[],
            month_year: '',
            esCompare: '',
        };
    },
    methods: {

        async getCategories(){
            try {
                const dateParts = this.month_year.split('-') // YYYY-mm
                const esfuerzoCompare = this.esCompare
                const res = await getInfo(Number (dateParts[1]),
                                                 Number (dateParts[0]),
                                                esfuerzoCompare)
                this.currentData = res.data
                console.log (res.data)
                        
            } catch (error) {
                console.error(error);
            }
        },
        mounted() {
            this.getCategories()
      },
          
    },


});
</script>