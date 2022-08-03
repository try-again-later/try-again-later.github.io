import { defineStore } from 'pinia';

export const useGalleryStore = defineStore('gallery', {
  state: () => {
    return {
      opened: false,
      images: [] as string[],
    };
  },
});
