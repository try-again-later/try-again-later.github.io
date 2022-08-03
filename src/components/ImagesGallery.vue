<script setup lang="ts">
import 'swiper/css';
import 'swiper/css/navigation';

import { XIcon } from '@heroicons/vue/outline';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Zoom } from 'swiper';

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
      <XIcon class="text-white w-12 h-12" />
      <span class="sr-only">Close</span>
    </button>
    <div class="flex-1">
      <swiper :slides-per-view="1" :navigation="true" :zoom="true" :modules="[Navigation, Zoom]">
        <swiper-slide v-for="image in images" :key="image">
          <div class="swiper-zoom-container grid place-items-center h-[calc(100vh_-_8rem)]">
            <img :src="image" alt="Screenshot" class="max-h-full" />
          </div>
        </swiper-slide>
      </swiper>
      <div
        @click="$emit('update:opened', false)"
        class="absolute inset-0 bg-black opacity-80 z-0"
      ></div>
    </div>
  </div>
</template>

<style>
:root {
  --swiper-theme-color: rgb(249 115 22 / 1);
}
</style>
