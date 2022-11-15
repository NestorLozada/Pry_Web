<template>
<form @submit.prevent="handleSubmit">
    <H3 > SING UP</H3>

    <div class="form-group">
        <label>Primer nombre</label>
        <input type="text" class="form-control" v-model = "registre.firsName" placeholder="Primer Nombre" />

    </div>
    <div class="form-group">
        <label>Apellido</label>
        <input type="text" class="form-control" v-model="registre.lastName" placeholder="Apellido" />
        
    </div>
    <div class="form-group">
        <label>EMAIL</label>
        <input type="email" class="form-control" v-model = "registre.email" placeholder="Email" />
    </div>

    <div class="form-group">
        <label>PASSWORD</label>
        <input type="password" class="form-control" v-model = "registre.passWord" placeholder="Password"/>            
    </div>

    <button class="btn btn-primary btn-block">Sing up </button>
</form>
</template>


<script lang="ts">
    import axios, {Axios} from 'axios';
    import { RegisterIN } from "@/interfaces/RegisterIN";
    import {createUser} from "@/services/UserService";
    export default {
        name: 'RegisterVue',
        data(){
            return{
                registre: {} as RegisterIN,

            }
        },
        methods:{
            async handleSubmit(){
                
            try {
                const res = await createUser(this.registre);
                this.$router.push({ name: "login" });
          }  catch (error) {
            console.error(error);
          }
        }
        }
    }
</script>