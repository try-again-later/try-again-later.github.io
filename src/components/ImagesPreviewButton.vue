<script setup lang="ts">
import { useGalleryStore } from '@root/stores/gallery.js';
import { usePointer } from '@vueuse/core';

const props = defineProps<{
  previewSrc: string;
  imagesUrls: string[];
}>();

const { pointerType } = usePointer();

const gallery = useGalleryStore();

function onClick() {
  gallery.opened = true;
  gallery.images = props.imagesUrls;
}
</script>

<template>
  <button class="group block w-full relative isolate cursor-pointer" @click="onClick">
    <img
      :src="previewSrc"
      alt="Project screenshot"
      class="h-48 w-full object-cover object-top border-8 border-gray-100"
    />
    <div
      class="absolute inset-0 z-10 bg-black opacity-0 group-hover:opacity-75 group-focus:opacity-75 transition-opacity"
      :class="{ 'opacity-75': pointerType == 'touch' }"
    ></div>
    <p
      class="absolute absolute-center text-white font-bold z-20 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity"
      :class="{ 'opacity-100': pointerType == 'touch' }"
    >
      Click to expand
    </p>
  </button>
</template>
