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
      <h1 class="text-3xl lg:mb-12 mb-4">Projects</h1>
      <ul class="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <li v-for="project in projects" :key="project.name">
          <ProjectCard :info="project" />
        </li>
      </ul>
    </div>

    <Transition>
      <ImagesGallery
        v-if="gallery.opened"
        :images="gallery.images"
        v-model:opened="gallery.opened"
      />
    </Transition>
  </main>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
