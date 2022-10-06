<template>
    <for>
        <input type="text" placeholder="Incerte texto" v-model="task.title">
        <textarea  rows="3" placeholder="Incerte texto" v-model="task.description"></textarea>
        <button> Guardar </button>
    </for>
</template>


<script lang="ts">
import {defineComponent} from 'vue';
import {Task} from '../interfaces/Task';

export default defineComponent({
    data(){
        return{
            task: {  

            } as Task
        };
    },
});

</script>
