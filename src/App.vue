<template>
	<component :is="layouts[layout]" />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { home, intro } from 'layouts'

const route = useRoute()

const layouts = {
	intro,
	home,
}

const layout = computed(() => route.meta.layout)
</script>
