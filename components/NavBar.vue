<script setup lang="ts">
import { ref } from "vue";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#history", label: "History" },
];

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}
</script>

<template>
  <nav class="fixed top-0 z-50 w-full">
    <div
      class="flex items-center justify-between border-b-2 border-secondary px-4 py-4 font-pixel text-sm backdrop-blur-sm md:px-8"
    >
      <div class="text-primary drop-shadow-primary">Nemoola</div>
      <ul class="hidden gap-8 md:flex">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            class="transition duration-200 hover:text-primary"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>
      <button
        @click="toggleMenu"
        class="flex items-center justify-center md:hidden"
      >
        <Icon
          :name="isMenuOpen ? 'ic:outline-close' : 'ic:outline-menu'"
          class="h-5 w-5"
        ></Icon>
      </button>
    </div>
    <!-- responsive menu -->
    <div
      class="md:hidden flex h-screen flex-col items-center space-y-12 px-4 py-8 font-pixel backdrop-blur-sm"
      v-show="isMenuOpen"
    >
      <h1 class="animate-blink text-4xl text-primary">Menu</h1>
      <ul class="flex flex-col gap-8">
        <li
          v-for="link in navLinks"
          :key="link.href"
          class="flex items-center justify-center"
        >
          <a
            :href="link.href"
            @click="closeMenu"
            class="transition duration-200 hover:text-primary"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
