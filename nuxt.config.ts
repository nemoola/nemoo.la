import tailwindcss from "@tailwindcss/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	srcDir: 'src/',
	css: ['~/assets/css/main.css'],
	nitro: {
		static: true,
	},
	vite: {
		plugins: [
			tailwindcss(),
		],
	},
	modules: [
		'@nuxt/icon',
		// '@nuxt/eslint',
	],
	// eslint: {
	// 	checker: true,
	// 	config: {
	// 		stylistic: true
	// 	}
	// }
});
