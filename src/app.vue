<template>
  <div class="flex items-center justify-center h-screen">
    <div class="flex flex-col box-border size-120 bg-white items-center justify-center p-5 space-y-5">
      <div class="">
        <img class="rounded-full mx-auto size-40 shadow-2xl" src="https://github.com/nemoola.png"  alt="nemoola"/>
      </div>
      <div class="">
        <p class="text-4xl text-center font-mono">Nemoola</p>
      </div>
      <div class="flex flex-col space-y-1 w-80">
        <a v-for="link in links" class="flex items-center justify-center rounded-xl size-8 w-full transition delay-100" :href="link.url" :class="[link.color, link.hover]">
          <div class="flex items-center h-full space-x-1.5">
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
	{'name':'Discord','url':'https://discord.gg/q6VJtCD8', 'color':'bg-indigo-500', 'hover':'hover:bg-indigo-700', 'icon': 'ri:discord-fill'},
	{'name':'GitHub','url':'https://github.com/nemoola', 'color': 'bg-stone-500', 'hover':'hover:bg-stone-700', 'icon': 'ri:github-fill'},
	{'name':'Telegram','url':'https://t.me/nemo0la', 'color':'bg-sky-500', 'hover':'hover:bg-sky-700', 'icon': 'ri:telegram-fill'},
  {'name':'Blog','url':'https://blog.nemoo.la/', 'color':'bg-rose-500', 'hover':'hover:bg-rose-700', 'icon': 'ri:blogger-fill'},
]
</script>
