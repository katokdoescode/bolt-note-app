<template>
	<OnboardingSlider @finish="goToLogin"/>
</template>
<script setup>
import { OnboardingSlider } from 'templates';
import { useRouter } from 'vue-router';
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();

const router = useRouter();

const goToLogin = () => {
	cookies.set('passedOnboarding', true);
	router.push({name: 'index'})
};
</script>
