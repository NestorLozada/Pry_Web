<template>
    <nav class="navbar navbar-expand navbar-light fixed-top">
      <div class="container">
        <a href="/task" class="navbar-brand">HOME</a>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <router-link class="nav-link" to="/login">Log in</router-link>
              </li>
              <li class="nav-item">
                <button @click="logout()"  class="btn btn-primary btn-block" >Log out </button>
              </li>
            </ul>
        </div>
      </div>
   </nav>
</template>

<script lang="ts">
    import { defineComponent } from '@vue/runtime-core';
    
        export default defineComponent({
            name: "NavForLogin",
            methods:{
                logout(){
                  sessionStorage.removeItem("isAut");
                  this.$router.push({ name: "login" });
                }
            }
        })
</script> 