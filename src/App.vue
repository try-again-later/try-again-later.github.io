<script setup lang="ts">
import { EnvelopeIcon, PaperAirplaneIcon } from '@heroicons/vue/24/outline';

import ProjectCard from '@components/ProjectCard.vue';
import ImagesGallery from '@components/ImagesGallery.vue';
import SkillsList from '@components/SkillsList.vue';
import ContactLink from '@components/ContactLink.vue';
import GithubIcon from '@icons/Github.vue';

import projects from '@root/Projects';
import { frontendSkills, backendSkills, miscSkills } from '@root/Skills';
import { useGalleryStore } from '@root/stores/gallery';
import contacts from '@root/Contacts';

const gallery = useGalleryStore();
</script>

<template>
  <main @keydown.esc="gallery.opened = false">
    <h1 class="sr-only">My page</h1>

    <div class="sm:max-w-7xl m-auto p-6 flex flex-col gap-12">
      <section>
        <h2 class="text-3xl mb-6 sm:text-left">Contacts</h2>

        <address class="not-italic grid sm:grid-cols-[min-content_auto] sm:gap-2">
          <ContactLink
            :href="`mailto:${contacts.email}`"
            title="Email"
            :open-in-new-tab="true"
          >
            <template #icon><EnvelopeIcon class="w-5 h-5" /></template>
            <template #content>{{ contacts.email }}</template>
          </ContactLink>

          <ContactLink
            :href="contacts.telegramLink"
            title="Telegram"
            class="mt-4 sm:mt-0"
            :open-in-new-tab="true"
          >
            <template #icon><PaperAirplaneIcon class="w-5 h-5" /></template>
            <template #content>
              <span class="before:content-['@']">{{ contacts.telegram }}</span>
            </template>
          </ContactLink>

          <ContactLink
            :href="contacts.githubLink"
            title="Github"
            class="mt-4 sm:mt-0"
            :open-in-new-tab="true"
          >
            <template #icon><GithubIcon class="w-5 h-5" /></template>
            <template #content>
              <span class="before:content-['@']">{{ contacts.github }}</span>
            </template>
          </ContactLink>
        </address>
      </section>

      <section>
        <h2 class="text-3xl mb-6 text-left">Skills</h2>

        <div class="grid gap-8 grid-cols-1 sm:grid-cols-3">
          <SkillsList skills-group="Frontend" :skills="frontendSkills" />
          <SkillsList skills-group="Backend" :skills="backendSkills" />
          <SkillsList skills-group="Misc" :skills="miscSkills" />
        </div>
      </section>

      <section>
        <h2 class="text-3xl mb-6 text-left">Projects</h2>
        <ul class="grid grid-cols-1 gap-4 lg:grid-cols-3 grid-rows-[repeat(5,auto)]">
          <li v-for="project in projects" :key="project.name" class="contents">
            <ProjectCard :info="project" class="row-span-5 grid-rows-subgrid" />
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
