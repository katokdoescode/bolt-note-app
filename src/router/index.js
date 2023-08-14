import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	// Index Page
	{
		path: '/',
		name: 'index',
		meta: {
			layout: 'HomeLayout',
		},
		component: () => import('../pages/IndexPage.vue'),
	},
	// Index Page
	{
		path: '/start',
		name: 'start',
		meta: {
			layout: 'HomeLayout',
		},
		component: () => import('../pages/StartPage.vue'),
	},
	// Onboarding Page
	{
		path: '/welcome',
		name: 'onboarding',
		meta: {
			layout: 'OnboardingLayout',
		},
		component: () => import('../pages/OnboardingPage.vue'),
	},
	// Home
	{
		path: '/home',
		name: 'home',
		meta: {
			layout: 'HomeLayout',
		},
		component: () => import('../pages/HomePage.vue'),
	},
	// 404
	{
		path: '/:catchAll(.*)',
		name: 'not-found',
		meta: {
			layout: 'HomeLayout',
		},
		component: () => import('../pages/NotFound.vue'),
	},
]

const router = createRouter({
	history: createWebHistory(undefined),
	routes,
})

export default router
