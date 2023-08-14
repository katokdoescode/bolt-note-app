<template>
	<component :is="layouts[layout]" />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { HomeLayout, OnboardingLayout } from 'layouts'

const route = useRoute()

const layouts = {
	HomeLayout,
	OnboardingLayout,
}

const layout = computed(() => route.meta.layout)
</script>
