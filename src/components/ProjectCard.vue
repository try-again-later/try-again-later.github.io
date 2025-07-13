<script setup lang="ts">
import IconLink from '@components/IconLink.vue';
import ImagesPreviewButton from '@root/components/ImagesPreviewButton.vue';

import type { ProjectInfo } from '@root/Projects';
import { CodeBracketIcon, GlobeEuropeAfricaIcon } from '@heroicons/vue/24/outline';

defineProps<{
  info: ProjectInfo;
}>();
</script>

<template>
  <article class="p-4 rounded-md shadow-md h-full bg-white flex gap-4 flex-col">
    <h3 class="text-xl">{{ info.name }}</h3>

    <section>
      <h4 class="sr-only">Technologies used</h4>
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
      <h4 class="sr-only">Description</h4>
      <ImagesPreviewButton
        v-if="info.screenshots.length > 0"
        :preview-src="info.screenshots[0]"
        :images-urls="info.screenshots"
        class="mb-4"
      />
      <div class="flex flex-col gap-4">
        <p v-for="paragraph in info.description">{{ paragraph }}</p>
      </div>
    </section>

    <section class="mt-auto">
      <h4 class="sr-only">Links</h4>
      <div class="flex flex-wrap gap-4">
        <IconLink :href="info.sourceCodeUrl" :icon="CodeBracketIcon"> Source code </IconLink>
        <IconLink v-if="info.liveUrl != null" :href="info.liveUrl" :icon="GlobeEuropeAfricaIcon">
          Live version
        </IconLink>
        <div v-if="info.wip" class="font-bold text-sm ml-auto">Not finished</div>
      </div>
    </section>
  </article>
</template>
