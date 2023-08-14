<template>
	<div class="loading-logo">
		<img
			class="loading-logo__image"
			src="/bolt.svg"
			alt="Bolt Logo"
			width="153"
			height="137"
		/>
		<h1 class="loading-logo__heading">Bolt</h1>
	</div>
</template>
<style>
.loading-logo {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: auto;
	height: 100vh;
}

.loading-logo__image.animated {
	animation: blink 1s ease-in-out infinite;
}

.loading-logo__heading {
	color: var(--brand-color);
	font-size: 40px;
	font-weight: 700;
}

@keyframes blink {
	0%,
	100% {
		opacity: 1;
	}

	50% {
		opacity: 0.6;
	}
}
</style>
