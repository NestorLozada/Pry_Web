<template>
  <NavBarLogin/>
  <div class="auth-wrapper">
    <div class="auth-inner">
      <RouterView/>
    </div>
    
  </div>

</template>



<script lang="ts">
import { defineComponent } from 'vue';
//import NavBar from './components/Navbar.vue';
import NavBarLogin from './components/NavForLogin.vue';
import Home from './components/Home.vue';
import LoginVue from './components/Login.vue';

export default defineComponent({
  name: 'App',
  components:{
    NavBarLogin
}

});
</script>





<style>
@import url('https://fonts.googleapis.com/css?family=Dira+Sans:400,500,600,700,800');
*{
  box-sizing:border-box;
}
body{
  background: #0C8EF9 !important;
  min-height: auto;
  display: flex;
  font-weight: 400;
  font-family: 'Courier New', Courier, monospace;
}
h1,h2,h3,h4,h5,h6, label, span{
  font-weight: 500;
  font-family: 'Courier New', Courier, monospace;
}
body, html, #app,#root, .auth-wrapper{
  width: 100%;
  height: 100%;
}
#app{
  text-align: center;
}
.navbar-light{
  background-color: #fff;
  box-shadow: 0px 14px 80px rgb(34, 35, 58, 0.2);
}
.auth-wrapper{
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
}
.auth-inner{
  width: 500px;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2) ;
  padding: 40px 55px 45px 55px;
  border-radius:15px ;
  transition: all .3s;
}
.auth-wrapper .form-control:focus{
  border-color: #167bff;
  box-shadow: none;
}
.auth-wrapper h3 {
  text-align: center;
  margin: 0;
  line-height: 1;
  padding-bottom: 20px;
}
.custom-control-label{
  font-weight: 400;
}
.forgot-password,
.forgot-password a{
  text-align: right;
  font-size: 13px;
  padding: 10px;
  color: #7f7f7f;
  margin: 0;
}
.forgot-password a{
  color: #167bff;
}
</style>
