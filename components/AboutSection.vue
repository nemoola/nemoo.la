<script setup lang="ts">
const stats = [
  { label: "Language", value: "Go", color: "text-primary" },
  { label: "Editor", value: "Zed", color: "text-slate-500" },
  { label: "MBTI", value: "INFJ", color: "text-emerald-500" },
  { label: "Location", value: "Japan", color: "text-red-500" },
];
</script>

<template>
  <section id="about">
    <h2 class="mb-12 flex items-center gap-4 font-pixel text-xl text-primary">
      <span class="animate-blink">></span>
      ABOUT
    </h2>

    <div class="grid grid-cols-1 gap-12 md:grid-cols-2">
      <div class="space-y-6 leading-8">
        <p>
          プログラミングのアルバイトしてます。<br />アルバイト先の先輩の影響でCTFを始めました。<br />最近はバグバウンティに興味持っています。
        </p>
      </div>

      <div class="grid w-full grid-cols-2 gap-4">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="border-2 border-secondary bg-white p-6 text-center shadow-sm transition duration-200 hover:-translate-y-1 hover:border-primary hover:drop-shadow-primary"
        >
          <span class="mb-2 block font-pixel text-xl" :class="stat.color">
            {{ stat.value }}
          </span>
          <span class="text-sm">{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
