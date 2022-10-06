<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <router-link class="navbar-brand" to="/">Nestor Lozada CRUD</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Tareas</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/task/new">Nueva tarea</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>

<script lang="ts">
    import { defineComponent } from '@vue/runtime-core';
    
        export default defineComponent({
            name: "NavbarVue",
        })
</script> 