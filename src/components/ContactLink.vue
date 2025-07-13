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
  <a
    :href="href"
    class="flex gap-1 items-center text-orange-500 hover:underline"
    :target="openInNewTab ? '_blank' : '_self'"
    v-bind="$attrs"
  >
    <slot name="icon"></slot>
    <span>{{ title }}</span>
  </a>
  <slot name="content"></slot>
</template>
