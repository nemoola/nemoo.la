<script setup lang="ts">
const history = [
  {
    date: "2020/04",
    title: "プログラミング開始",
    description: "コロナで学校が休みになって暇でプログラミングを始めた。",
  },
  {
    date: "2022/04",
    title: "茨城県立工業高等学校 入学",
  },
  {
    date: "2025/03",
    title: "茨城県立工業高等学校 卒業",
  },
  {
    date: "2025/04",
    title: "xxxx大学 入学",
  },
  {
    date: "2025/06",
    title: "株式会社xxxxxx アルバイトとして入社",
    description: "プログラミグさせてもらってます。",
  },
];
</script>

<template>
  <section id="history">
    <h2 class="mb-12 flex items-center gap-4 font-pixel text-xl text-primary">
      <span class="animate-blink">></span>
      HISTORY
    </h2>

    <div class="relative ml-2 flex">
      <div class="w-0.5 bg-gradient-to-b from-primary to-accent" />
      <div class="space-y-8">
        <div v-for="item in history" :key="item.date" class="flex">
          <div
            class="absolute -start-1 h-3 w-3 bg-primary outline outline-2 outline-white"
          ></div>

          <div class="flex flex-col space-y-2 pl-8">
            <span class="font-pixel text-xs text-yellow-500">
              {{ item.date }}
            </span>
            <h3 class="text-base sm:text-lg">{{ item.title }}</h3>
            <p v-if="item.description" class="text-xs leading-7 sm:text-sm">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
