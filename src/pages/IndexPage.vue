<template>
	<LoadingLogo class="animated"/>
</template>

<script setup>
import { LoadingLogo } from 'modules';
import { isAuthed } from 'api';
import { onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import { useCookies } from "vue3-cookies";

const router = useRouter();
const { cookies } = useCookies();

onBeforeMount(async () => {
	const isUserAuthenticated = await isAuthed();
	const isOnboarded = cookies.get('passedOnboarding');

	if(isUserAuthenticated) router.push({name: 'home'});
	else if(isOnboarded) router.push({name: 'start'});
	else router.push({name: 'onboarding'});
});
</script>
