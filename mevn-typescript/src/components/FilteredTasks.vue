<template>
    <div>


    <input
        class="form-control mb-3"
        placeholder="Fecha inicial"
        type="date"
        v-model="fechaInicio"
        autofocus
    />
    <input
        class="form-control mb-3"
        placeholder="Fecha final"
        type="date"
        v-model="fechaFin"
        autofocus
    />
    <input 
          type="number"
          v-model="minEsfuerzo"  
          class="form-control mb-3"
    />

    <button @click="getCategories()">Get Filter Data</button>
</div>
<div>
    <ul class="list-group">
        <h1> Lista </h1>    
        <li
            class="list-group-item list-group-item-action p-4"
            v-for="(taskss, index) in tasks"
            v-bind:key="index"
        > {{ taskss.title }}
        {{ taskss.esfuerzo }}
        {{ taskss.done }}
    </li>
    </ul>
</div>
</template>

<script lang="ts">
import { DataInfo } from "@/interfaces/Data";
import {Task} from "@/interfaces/Task";
import {getInfo,getTareasPen} from "@/services/TaskService";
import {defineComponent} from "vue";
export default defineComponent({
    name: "data-filter",
    data() {
        return{
            tasks: [] as Task[],
            fechaInicio: '',
            fechaFin: '',
            minEsfuerzo: '',
        };
    },
    methods: {

        async getCategories(){
            try {
                const dateInicio = this.fechaInicio
                const datesFin = this.fechaFin
                const esfuerzoCompare = this.minEsfuerzo

                const res = await getTareasPen(dateInicio, datesFin,
                                                esfuerzoCompare)
                this.currentData = res.data
                console.log(esfuerzoCompare)
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