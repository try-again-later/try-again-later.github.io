<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/outline';

defineProps<{
  opened: boolean;
  images: string[];
}>();

defineEmits<{
  (e: 'update:opened', opened: boolean): void;
}>();
</script>

<template>
  <div class="fixed inset-0 flex flex-col">
    <button @click="$emit('update:opened', false)" class="relative self-end z-10 p-4 items-end">
      <XMarkIcon class="text-white w-12 h-12" />
      <span class="sr-only">Close</span>
    </button>
    <div class="flex-1">
      <div
        @click="$emit('update:opened', false)"
        class="absolute inset-0 bg-black opacity-80 z-0"
      ></div>
    </div>
  </div>
</template>
