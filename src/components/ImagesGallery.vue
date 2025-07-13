<script setup lang="ts">
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline';
import { ref } from 'vue';

defineProps<{
  opened: boolean;
  images: string[];
}>();

defineEmits<{
  (e: 'update:opened', opened: boolean): void;
}>();

const currentImageIndex = ref(0);
</script>

<template>
  <div class="fixed left-0 top-0 w-full h-full backdrop-blur-xs">
    <button @click="$emit('update:opened', false)" class="absolute right-4 top-4 z-30 cursor-pointer">
      <XMarkIcon class="text-white w-16 h-16" />
      <span class="sr-only">Close</span>
    </button>

    <button class="absolute left-0 top-0 w-24 h-full z-20 grid place-items-center"
      @click="currentImageIndex = Math.max(currentImageIndex - 1, 0)">
      <ChevronLeftIcon class="drop-shadow-sm" :class="{
        'text-gray-400': currentImageIndex == 0,
        'text-orange-500 cursor-pointer': currentImageIndex > 0,
      }" />
    </button>

    <button class="absolute right-0 top-0 w-24 h-full z-20 grid place-items-center"
      @click="currentImageIndex = Math.min(currentImageIndex + 1, images.length - 1)">
      <ChevronRightIcon class="drop-shadow-sm" :class="{
        'text-gray-400': currentImageIndex == images.length - 1,
        'text-orange-500 cursor-pointer': currentImageIndex < images.length - 1,
      }" />
    </button>

    <div class="absolute inset-0 m-auto z-10 min-h-0 w-full h-4/5 flex z-10 transition duration-350"
      :style="`transform: translate(${-currentImageIndex * 100}%)`">
      <div v-for="image in images" class="w-full h-full shrink-0 relative" @click.self="$emit('update:opened', false)">
        <img :src="image" alt="" class="absolute inset-0 max-w-full max-h-full m-auto shadow-lg">
      </div>
    </div>

    <div @click="$emit('update:opened', false)" class="absolute inset-0 bg-black opacity-80 z-0"></div>
  </div>
</template>
