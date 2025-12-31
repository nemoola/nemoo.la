<script setup lang="ts">
const projects = [
  {
    icon: "twemoji:no-entry",
    title: "Empty",
    description: "まだないのでこれから頑張る",
    tags: [],
  },
];
</script>

<template>
  <section id="projects">
    <h2 class="mb-12 flex items-center gap-4 font-pixel text-xl text-primary">
      <span class="animate-blink">></span>
      PROJECTS
    </h2>

    <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      <div
        v-for="project in projects"
        :key="project.title"
        class="group w-full overflow-hidden border-2 border-secondary bg-secondary transition duration-200 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:drop-shadow-primary"
      >
        <div class="flex h-44 items-center justify-center">
          <Icon :name="project.icon" class="h-20 w-20" />
        </div>

        <div class="flex flex-col space-y-4 bg-white p-6">
          <h3 class="font-pixel text-xs">
            {{ project.title }}
          </h3>
          <p class="text-sm leading-7">
            {{ project.description }}
          </p>
          <div v-if="project.tags.length != 0" class="flex flex-wrap gap-2">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="bg-secondary px-2 py-1 text-xs text-background"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
