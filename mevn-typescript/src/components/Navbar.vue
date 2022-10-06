
<template>
    <nav>
        <ul>
            <li>
                <router-link to="/">Tareas</router-link>

            </li>
            <li>
                <router-link to="/task/new">Crear tarea</router-link>        
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
    import { defineComponent } from '@vue/runtime-core';
    
        export default defineComponent({
            name: "NavbarVue",
        })
</script> 