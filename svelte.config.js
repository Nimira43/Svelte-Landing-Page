import adapter from '@sveltejs/adapter-auto'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$components: 'src/lib/components',
			$assets: 'src/assets',
		},
	},
}

export default config
