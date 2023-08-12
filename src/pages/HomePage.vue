<template>
	<h1>Home</h1>
	<ul>
		<li v-for="(post, key) in posts" :key="key">
			<article>
				<h2>{{ post.title }}</h2>
				<p>{{ post.text }}</p>
			</article>
		</li>
	</ul>
</template>

<script setup>
import { posts } from 'api'
</script>
