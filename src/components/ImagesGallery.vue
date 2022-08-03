<script setup lang="ts">
defineProps<{
  images: string[];
}>();
</script>

<template>
  <div>
    <img v-for="image in images" :src="image" alt="Screenshot" />
  </div>
</template>
