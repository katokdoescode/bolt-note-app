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

	<button @click="logOutUser">Logout</button>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getPosts, logOut } from 'api';

const router = useRouter();
const posts = ref([]);

const logOutUser = () => {
	logOut();
	router.push({name: 'index'});
}

getPosts().then(fetchedPosts => {
	posts.value = fetchedPosts;
});
</script>
