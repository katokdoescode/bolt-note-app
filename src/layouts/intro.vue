<template>
	<nav id="skip-intro" aria-label="Skip the intro">
		<slot name="skip">
			<a href="/home">Skip</a>
		</slot>
	</nav>

	<main>
		<RouterView />
	</main>

	<nav id="next-intro" aria-label="Next intro page">
		<slot name="next">Next</slot>
	</nav>
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>
