<script setup lang="ts">
const skillCategories = [
  {
    title: "Languages",
    icon: "twemoji:laptop",
    skills: ["Go", "V", "C++", "PHP"],
  },
  {
    title: "Frameworks & Tools",
    icon: "twemoji:hammer-and-wrench",
    skills: ["Nuxt.js", "TailwindCSS", "Docker", "Git"],
  },
  {
    title: "Interests",
    icon: "twemoji:direct-hit",
    skills: ["Security", "CTF", "OSS"],
  },
];
</script>

<template>
  <section id="skills">
    <h2 class="mb-12 flex items-center gap-4 font-pixel text-xl text-primary">
      <span class="animate-blink">></span>
      SKILLS
    </h2>

    <div class="flex flex-col gap-8">
      <div
        v-for="category in skillCategories"
        :key="category.title"
        class="border-2 border-secondary bg-white p-8 shadow-sm"
      >
        <h3
          class="mb-6 flex items-center gap-2 font-pixel text-xs text-pink-500"
        >
          <Icon :name="category.icon" class="h-4 w-4" />
          {{ category.title }}
        </h3>
        <div class="flex flex-wrap gap-3">
          <span
            v-for="skill in category.skills"
            :key="skill"
            class="border border-transparent bg-secondary px-4 py-2 text-sm text-background transition duration-200 hover:border-primary hover:bg-primary"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
