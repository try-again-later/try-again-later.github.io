<script setup lang="ts">
import IconLink from '@components/IconLink.vue';
import ImagesPreviewButton from '@root/components/ImagesPreviewButton.vue';

import { ProjectInfo } from '@root/Projects';
import { CodeIcon, GlobeIcon } from '@heroicons/vue/outline';

defineProps<{
  info: ProjectInfo;
}>();
</script>

<template>
  <article class="p-4 rounded-md shadow-md h-full bg-white flex gap-4 flex-col">
    <h2 class="text-xl">{{ info.name }}</h2>

    <section>
      <h3 class="sr-only">Technologies used</h3>
      <ul class="flex gap-2 flex-wrap">
        <li
          v-for="technology in info.technologies"
          :key="technology"
          class="bg-orange-500 rounded-full text-white text-sm font-bold px-2 py-1"
        >
          {{ technology }}
        </li>
      </ul>
    </section>

    <section>
      <h3 class="sr-only">Description</h3>
      <ImagesPreviewButton
        v-if="info.screenshots.length > 0"
        :preview-src="info.screenshots[0]"
        :images-urls="info.screenshots"
      />
      <p>{{ info.description }}</p>
    </section>

    <section class="mt-auto">
      <h3 class="sr-only">Links</h3>
      <div class="flex flex-wrap gap-4">
        <IconLink :href="info.sourceCodeUrl" :icon="CodeIcon"> Source code </IconLink>
        <IconLink v-if="info.liveUrl != null" :href="info.liveUrl" :icon="GlobeIcon">
          Live version
        </IconLink>
      </div>
    </section>
  </article>
</template>
