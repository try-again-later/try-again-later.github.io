<script setup lang="ts">
import { EnvelopeIcon, PaperAirplaneIcon } from '@heroicons/vue/24/outline';
import { DocumentTextIcon } from '@heroicons/vue/24/outline';

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

    <div class="sm:max-w-6xl m-auto p-6 flex flex-col gap-12">
      <section class="relative sm:text-lg">
        <h2 class="text-3xl mb-6 sm:text-left">Обо мне</h2>
        <p class="text-xl mb-2 font-semibold">Попок Артем</p>
        <p class="text-justify lg:max-w-2/3 mb-2 sm:mb-4">
          Fullstack разработчик (Vue / Laravel). В данный момент заинтересован в работе frontend
          разработчиком, желательно на Vue или React, но открыт к работе и с другими технологиями.
        </p>

        <a
          href="/CV.pdf"
          target="_blank"
          class="
            block sm:absolute sm:top-0 sm:right-0 mb-4
            sm:border sm:border-solid sm:border-orange-500 sm:rounded-md sm:px-2 sm:py-1 text-orange-500
            hover:underline sm:hover:no-underline sm:hover:text-white sm:hover:bg-orange-500
            transition duration-200
            flex gap-1 items-center
          "
        >
          <DocumentTextIcon class="w-5 h-5 hidden sm:block" />
          Открыть резюме в PDF
        </a>

        <address class="not-italic grid sm:grid-cols-[min-content_auto] sm:gap-x-4 sm:gap-y-2">
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

      <section class="sm:text-lg">
        <h2 class="text-3xl mb-6 sm:text-left">Опыт работы</h2>

        <div class="grid grid-cols-3 gap-x-8">
          <div class="col-span-3 lg:col-span-2">
            <p class="font-semibold mb-2 sm:mb-0">
              PHP backend разработчик (Junior)
            </p>
            <p class="text-gray-500">
              Команда разработки админ-панели и внутренних инструментов
            </p>
          </div>
          <div class="col-span-3 lg:col-span-1 flex gap-2 -order-1 lg:order-0 lg:gap-8 lg:justify-between">
            <p class="font-semibold">Aviakassa</p>
            <p class="lg:text-right font-semibold">2023&ndash;2025</p>
          </div>
          <hr class="col-start-1 col-span-3 my-4 border-1 border-gray-300">
          <ul class="text-justify list-disc col-span-3 lg:col-span-2 col-start-1 flex flex-col gap-2">
            <li>
              Разрабатывал инструмент для упрощения взаимодействия с GDS терминалами.
            </li>
            <li>
              Участвовал в разработке системы для автоматического распределения тикетов
              на сотрудников техподдержки.
            </li>
            <li>
              Писал запросы к БД для визуализации статистики в Grafana
              по разным внутренним инструментам.
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 class="text-3xl mb-6 text-left">Технологии</h2>

        <div class="grid gap-8 grid-cols-1 sm:grid-cols-3">
          <SkillsList skills-group="Frontend" :skills="frontendSkills" />
          <SkillsList skills-group="Backend" :skills="backendSkills" />
          <SkillsList skills-group="Misc" :skills="miscSkills" />
        </div>
      </section>

      <section>
        <h2 class="text-3xl mb-6 text-left">Проекты</h2>
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
  transition: opacity 200ms ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
