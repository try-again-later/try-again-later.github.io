<script setup lang="ts">
import SkillComponent from '@components/Skill.vue';

import type { Skill } from '@root/Skills';

defineProps<{
  skillsGroup: string;
  skills: Skill[];
}>();
</script>

<template>
  <section>
    <h3 class="text-xl mb-4 text-left">{{ skillsGroup }}</h3>
    <ul class="flex flex-col gap-6">
      <li v-for="skill in skills">
        <SkillComponent :skill="skill" />
      </li>
    </ul>
  </section>
</template>
