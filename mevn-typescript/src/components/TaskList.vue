<template>
    <ul class="list-group">
      <li
        class="list-group-item list-group-item-action p-4"
        style="cursor: pointer"
        v-for="(task, index) in tasks"
        :key="index"
        @click="this.$router.push(`/task/${task._id}`)"
      >
        {{ task.title }}
      </li>
    </ul>
  </template>

<script lang="ts">
    import { Task } from "@/interfaces/Task";
    import { getTasks } from "@/services/TaskService";
    import { defineComponent } from "vue";
    export default defineComponent({
      name: "tasks-list",
      data() {
        return {
          tasks: [] as Task[],
        };
      },
      methods: {
        async loadTasks() {
          try {
            const res = await getTasks();
            this.tasks = res.data;
          } catch (error) {
            console.error(error);
          }
        },
      },
      mounted() {
            const isAut = sessionStorage.getItem("isAut") || "";
            if (isAut !== "true")
              this.$router.push({ name: "login" });
            else
          this.loadTasks();
      },
    });
</script>