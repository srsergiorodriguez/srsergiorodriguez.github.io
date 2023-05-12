import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		paths: {
			base: ''
		},
		adapter: adapter({
				pages: 'docs',
				fallback: "index.html",
				precompress: false,
				strict: true
		})
	}
};

export default config;