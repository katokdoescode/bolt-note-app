<template>
	<div class="intro-layout">
		<nav
			id="topNav"
			aria-label="Skip the intro"
			class="intro-layout__skip"
		></nav>

		<main class="intro-layout__main">
			<RouterView />
		</main>

		<nav
			id="bottomNav"
			aria-label="Next intro page"
			class="intro-layout__next"
		></nav>
	</div>
</template>

<script setup>
import { RouterView } from 'vue-router';
</script>

<style>
.intro-layout {
	display: grid;
	grid-template-rows: max-content 1fr max-content;
	height: 100svh;
}
</style>
