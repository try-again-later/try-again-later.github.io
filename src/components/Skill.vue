<script setup lang="ts">
import type { Skill } from '@root/Skills';
import { MAX_SKILL_LEVEL } from '@root/Skills';

defineProps<{
  skill: Skill;
}>();
</script>

<template>
  <article>
    <h3 class="text-sm mb-2 flex gap-2 items-center justify-center sm:justify-start">
      <img
        v-if="skill.icon != null"
        :src="skill.icon"
        :alt="`${skill.technology} icon`"
        class="w-5 h-5"
      />
      {{ skill.technology }}
    </h3>
    <progress
      :value="skill.level"
      :max="MAX_SKILL_LEVEL"
      min="0"
      class="sr-only"
      :aria-label="`${skill.technology} skill level`"
    ></progress>
    <div aria-hidden="true" class="flex gap-1 justify-center sm:justify-start">
      <div
        v-for="i in MAX_SKILL_LEVEL"
        class="w-10 h-1 rounded-full"
        :class="{ 'bg-orange-500': i <= skill.level, 'bg-gray-300': i > skill.level }"
      ></div>
    </div>
  </article>
</template>
