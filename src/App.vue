<script setup lang="ts">
import ProjectCard from '@components/ProjectCard.vue';
import ImagesGallery from '@components/ImagesGallery.vue';
import SkillsList from '@components/SkillsList.vue';

import projects from './Projects';
import { frontendSkills, backendSkills, miscSkills } from './Skills';
import { useGalleryStore } from './stores/gallery';

const gallery = useGalleryStore();
</script>

<template>
  <main>
    <h1 class="sr-only">My page</h1>

    <div class="container m-auto p-6 flex flex-col gap-12">
      <section>
        <h2 class="text-3xl lg:mb-6 mb-4 text-center sm:text-left">Skills</h2>

        <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <SkillsList skills-group="Frontend" :skills="frontendSkills" />
          <SkillsList skills-group="Backend" :skills="backendSkills" />
          <SkillsList skills-group="Misc" :skills="miscSkills" />
        </div>
      </section>

      <section>
        <h2 class="text-3xl lg:mb-6 mb-4 text-center sm:text-left">Projects</h2>
        <ul class="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <li v-for="project in projects" :key="project.name">
            <ProjectCard :info="project" />
          </li>
        </ul>
      </section>
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
