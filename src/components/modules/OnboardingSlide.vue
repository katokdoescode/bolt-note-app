<template>
	<figure class="intro-slide">
		<img
			:src="image.src"
			:width="image.width"
			:height="image.height"
			:alt="image.alt"
		>

		<figcaption>{{ image.caption }}</figcaption>
	</figure>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
	image: {
		type: Array,
		default: () => ({
			src: '/images/#',
			width: '0',
			height: '0',
			alt: 'Empty image',
			caption: 'Empty caption',
		})
	}
});
</script>

<style>
figure.intro-slide {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	max-width: 374px;
	width: 100%;
	margin: 0;
	gap:  60px;
}

figure.intro-slide img {
	object-fit: contain;
	height: 374px;
	width: auto;
}

figure.intro-slide figcaption {
	max-width: 374px;
	text-align: center;
	word-wrap: balance;
	font-size: 20px;
	line-height: 30px;
}
</style>
