<template>
    <ul>
        <li v-for="task in tasks" :key="task._id">
            {{task.title}}
        </li>
        
    </ul>

</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import {getTasks} from "@/services/TaskService"
    import { Task } from '@/interfaces/Task';

    export default defineComponent ({
        data() {
            return{
                tasks: [] as Task[],

            };
        },
        methods: {
            async  loadTask(){
               const res = await getTasks(); 
               console.log(res)
               this.tasks = res.data
            }

        },
        mounted(){
            this.loadTask()

        }

    })
</script>