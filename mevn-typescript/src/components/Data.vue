<template>
    <div>
        <form @submit.prevent="handleUpdate()" class="card card-body">
            <h1 class= "card-title my-3 text-center">INFORMACION GENERAL</h1>
            <input
                type="text"
                v-model ="currentData"
                class="from-conrtol mb-3"
            />
        </form>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import { DataInfo } from "@/interfaces/Data";
import {getData, getTask, updateData} from "@/services/TaskService";
import { loadRouteLocation } from "vue-router";
export default defineComponent({
    name: "data-list",
    data() {
        return{
            currentData: [] as DataInfo[],
        };
    },
    methods: {
        async loadData(id: string){
            try {
                const {data} = await getTask(id);
                this.currentData = data;
            } catch (error) {
                console.error(error);
            }
        },
        async handleUpdate() {
            try {
                if (typeof this.$route.params.id === "string"){
                    await updateData (this.$route.params.id, this.currentData);
                    this.$router.push("/");
                }
            } catch (error) {
                console.error(error);
            }
            
        }
    }
})
</script>