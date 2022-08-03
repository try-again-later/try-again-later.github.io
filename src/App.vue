<script setup lang="ts">
import ProjectCard from '@components/ProjectCard.vue';
import ImagesGallery from '@components/ImagesGallery.vue';

import projects from './Projects';
import { useGalleryStore } from './stores/gallery';

const gallery = useGalleryStore();
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

    <ImagesGallery v-if="gallery.opened" :images="gallery.images" />
  </main>
</template>
