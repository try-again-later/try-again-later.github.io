<script setup lang="ts">
import { FunctionalComponent } from 'vue';

withDefaults(
  defineProps<{
    href: string;
    title: string;
    icon?: FunctionalComponent;
    openInNewTab: boolean;
  }>(),
  {
    icon: undefined,
    openInNewTab: false,
  },
);
</script>

<template>
  <div class="flex gap-1 flex-wrap justify-center sm:justify-start">
    <a
      :href="href"
      class="flex gap-1 items-center text-orange-500 hover:underline"
      :target="openInNewTab ? '_blank' : '_self'"
    >
      <component v-if="icon != undefined" :is="icon" class="w-5 h-5" />
      {{ title }}:
    </a>
    <slot></slot>
  </div>
</template>
