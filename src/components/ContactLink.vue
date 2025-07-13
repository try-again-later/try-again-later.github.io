<script setup lang="ts">
withDefaults(
  defineProps<{
    href: string;
    title: string;
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
      <slot name="icon"></slot>
      {{ title }}:
    </a>
    <slot name="content"></slot>
  </div>
</template>
