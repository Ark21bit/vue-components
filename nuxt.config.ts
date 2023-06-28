// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	vue:{
		propsDestructure:true
	},
	modules: [
		"@nuxt/devtools",
		"@formkit/nuxt",
		"@nuxtjs/tailwindcss",
		"@vueuse/nuxt",
		"nuxt-icon",
	],
	experimental: { },
	components: [{ path: "~/components/atoms" }, "~/components"],
	devtools: { enabled: true },
});
