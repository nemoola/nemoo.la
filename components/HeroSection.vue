<script setup lang="ts">
const socialLinks = [
  { label: "X(Twitter)", icon: "logos:x", link: "https://x.com/Nemo0la" },
  {
    label: "GitHub",
    icon: "logos:github-icon",
    link: "https://github.com/nemoola",
  },
  { label: "Telegram", icon: "logos:telegram", link: "https://t.me/nemo0la" },
  { label: "Blog", icon: "twemoji:memo", link: "https://blog.nemoo.la" },
];
</script>

<template>
  <section class="flex h-screen flex-col items-center justify-center gap-7">
    <div>
      <div
        class="flex h-36 w-36 items-center justify-center overflow-hidden rounded-full drop-shadow-primary"
      >
        <img src="/assets/image/icon.png" />
      </div>
    </div>

    <h1
      class="bg-gradient-to-r from-primary to-accent bg-clip-text font-pixel text-4xl text-transparent drop-shadow-gradient"
    >
      Nemoola
    </h1>

    <p class="text-sm tracking-[0.2em]">DEVELOPER</p>

    <p class="text-center">大学生<br />セキュリティ興味あります</p>

    <div class="grid w-full grid-cols-2 flex-wrap justify-center gap-4 sm:flex">
      <a
        v-for="link in socialLinks"
        :key="link.label"
        :href="link.link"
        class="flex items-center justify-center gap-2 overflow-hidden border-2 border-secondary bg-white px-6 py-3 text-sm transition duration-200 hover:-translate-y-1 hover:border-primary hover:drop-shadow-primary"
      >
        <Icon :name="link.icon" class="h-4 w-4" />
        {{ link.label }}
      </a>
    </div>

    <div
      class="absolute bottom-8 flex -translate-x-1/2 animate-bounce items-center justify-center"
      onclick="location.href = '#about'"
    >
      <span
        class="h-5 w-5 rotate-45 border-b-2 border-r-2 border-primary opacity-50"
      />
    </div>
  </section>
</template>
