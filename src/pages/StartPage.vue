<template>
	<div class="login-page">
		<LoadingLogo class="login-page__logo" />

		<div class="login-page__buttons">
			<UiButton
				class="login-page__button login"
				mode="shadowed-arrow-right"
				@click="logIn"
			>
				Login
			</UiButton>
			<UiButton
				class="login-page__button register"
				mode="shadowed-arrow-right"
				@click="logIn"
			>
				Register
			</UiButton>
		</div>
	</div>
</template>

<script setup>
import { LoadingLogo } from 'modules';
import { UiButton } from 'ui';
import { logIn, isAuthed } from 'api';
import { useRouter } from 'vue-router';
import { onBeforeMount } from 'vue';

const router = useRouter();

onBeforeMount(async () => {
	const isUserAuthenticated = await isAuthed();
	if(isUserAuthenticated) router.push({name: 'home'});
});
</script>

<style>
.login-page {
	display: flex;
	flex-direction: column;
	justify-self: space-between;
	padding: 20px;
	height: 100lvh;
	box-sizing: border-box;
}

.login-page__logo {
	max-height: 50vh;
}

.login-page__buttons {
	display: flex;
	flex: 0 1 auto;
	flex-direction: column;
	gap: 25px;
}

.login-page__button {
	justify-self: flex-end;
}

.login-page__button.register {
	background-color: var(--accent-color-second);
}
</style>
