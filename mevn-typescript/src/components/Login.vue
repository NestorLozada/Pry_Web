<template>
    <form @submit.prevent="handleSubmit">
        <h3>LogIn</h3>
        <div class="form-group">
            <label>EMAIL</label>
            <input type="email" class="form-control" v-model ="login.email" placeholder="Email" />
        </div>

        <div class="form-group">
            <label>PASSWORD</label>
            <input type="password" class="form-control" v-model ="login.passWord" placeholder="Password"/>            
        </div>
        <button class="btn btn-primary btn-block"> LogIn</button>
    </form>
</template>

<script lang="ts">
import { Login } from '@/interfaces/Loggin';
import { login } from '@/services/UserService';

    export default {
        name: 'LoginVue',
        data() {
            return{
                login: {} as Login,

            }
        },

        methods:{
            async handleSubmit(){            
            try {
                
                const res = await login(this.login);
                if (res.flag === true){
                    this.$router.push({ name: "task" });
                    sessionStorage.setItem("isAut", "true");
                }
          }  catch (error) {
            console.error(error);
          }
        }
        }
    }

</script>