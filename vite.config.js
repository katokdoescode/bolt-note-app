import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
	resolve: {
		alias: {
				api: '/src/api',
				utils: '/src/utils',

				layouts: '/src/layouts',
				pages: '/src/pages',

				ui: '/src/components/ui',
				modules: '/src/components/modules',
				templates: '/src/components/templates',
		}
	}
})
