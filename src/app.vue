<template>
  <div class="flex items-center justify-center h-screen dark:bg-neutral-800">
    <div class="flex flex-col box-border size-120 items-center justify-center gap-y-5">
      <div class="">
        <img class="rounded-full mx-auto size-40 shadow-2xl" src="https://github.com/nemoola.png"  alt="nemoola"/>
      </div>
      <div class="">
        <p class="text-4xl text-center font-mono dark:text-white">Nemoola</p>
      </div>
      <div class="flex flex-col gap-y-1 w-80">
        <a v-for="link in links" class="flex items-center justify-center rounded-xl size-8 w-full transition duration-200" :href="link.url" :class="[link.color, link.hover]">
          <div class="flex items-center h-full gap-x-1.5">
            <Icon class="text-white text-lg" :name="link.icon" />
            <p class="text-white font-mono text-lg relative top-[1px]">{{ link.name }}</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const links = [
  {'name':'X(Twitter)','url':'https://x.com/nemo0la', 'color':'bg-black', 'hover':'hover:bg-stone-800', 'icon': 'ri:twitter-x-fill'},
  {'name':'GitHub','url':'https://github.com/nemoola', 'color': 'bg-stone-500', 'hover':'hover:bg-stone-700', 'icon': 'ri:github-fill'},
  {'name':'Telegram','url':'https://t.me/nemo0la', 'color':'bg-sky-500', 'hover':'hover:bg-sky-700', 'icon': 'ri:telegram-fill'},
  {'name':'Blog','url':'https://blog.nemoo.la/', 'color':'bg-rose-500', 'hover':'hover:bg-rose-700', 'icon': 'ri:blogger-fill'},
]
</script>
