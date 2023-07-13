import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		paths: {
			base: ''
		},
		// trailingSlash: 'always',
		adapter: adapter({
				pages: 'docs',
				// fallback: "index.html",
				precompress: false,
				strict: true,
				hydrate: true
		})
	}
};

export default config;
