<script setup lang="ts">
import type { FunctionalComponent } from 'vue';

defineProps<{
  href: string;
  icon: FunctionalComponent;
}>();
</script>

<template>
  <a :href="href" target="_blank" class="flex items-center gap-1">
    <component :is="icon" class="h-5 w-5 text-orange-500" />
    <span class="text-sm hover:underline">
      <slot></slot>
    </span>
  </a>
</template>
