<script setup lang="ts">
import projects from './Projects';
import ProjectCard from '@components/ProjectCard.vue';
</script>

<template>
  <main>
    <div class="container m-auto p-6">
      <h1 class="text-3xl mb-4">Projects</h1>
      <ul class="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <li v-for="project in projects" :key="project.name">
          <ProjectCard :info="project" />
        </li>
      </ul>
    </div>
  </main>
</template>
