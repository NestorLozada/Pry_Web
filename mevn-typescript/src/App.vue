<template>
  <NavbarVue/>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavbarVue from './components/Navbar.vue';

export default defineComponent({
  name: 'App',
  components: {
    NavbarVue
  },
});
</script>

<style>

</style>
