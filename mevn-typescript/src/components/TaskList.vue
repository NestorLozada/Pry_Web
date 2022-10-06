<template>
    <h1>Lista de tareas</h1>
</template>
\
<script lang="ts">
    import { defineComponent } from 'vue';
    import {getTasks} from "@/services/TaskService"

    export default defineComponent ({
        methods: {
            async  loadTask(){
               const res = await getTasks(); 
               console.log(res)
            }

        },
        mounted(){
            this.loadTask()

        }

    })
</script>