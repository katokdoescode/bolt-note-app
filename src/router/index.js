import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	// Intro Page
	{
		path: '/',
		name: 'intro',
		meta: {
			layout: 'intro',
		},
		component: () => import('../pages/IntroPage.vue'),
	},
	// Home
	{
		path: '/home',
		name: 'home',
		meta: {
			layout: 'home',
		},
		component: () => import('../pages/HomePage.vue'),
	},
]

const router = createRouter({
	history: createWebHistory(undefined),
	routes,
})

export default router
