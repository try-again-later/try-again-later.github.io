<script setup lang="ts">
import { FunctionalComponent } from 'vue';

defineProps<{
  href: string;
  title: string;
  icon: FunctionalComponent;
}>();
</script>

<template>
  <div class="flex gap-1 flex-wrap justify-center sm:justify-start">
    <a :href="href" class="flex gap-1 items-center text-orange-500 hover:underline">
      <component :is="icon" class="w-5 h-5" />
      {{ title }}:
    </a>
    <slot></slot>
  </div>
</template>
