<template>
	<Teleport to="#topNav" v-if="isMounted">
		<a href="/home" class="onboarding__skip">Skip</a>
	</Teleport>

	<div class="onboarding-slider">
		<Transition
			name="slide-fade"
			v-for="(slide, key) in slides"
			:key="key"
			class="onboarding-slider__slide"
		>
			<OnboardingSlide v-if="key === currentSlideIndex" :image="slide" />
		</Transition>
	</div>

	<Teleport to="#bottomNav" v-if="isMounted">
		<UiButton @click="addIndex">Continue</UiButton>
	</Teleport>
</template>

<script setup>
import { shallowRef, onMounted, defineEmits } from 'vue';
import { OnboardingSlide } from 'modules';
import { UiButton } from '../ui';

const emits = defineEmits(['finish'])

const slides = [
	{
		src: '/images/svg/onboarding-image-1.svg',
		width: 374,
		height: 374,
		alt: 'A smiling man with the notepad.',
		caption: 'Wrote down anything you want to achieve today or in future.',
	},
	{
		src: '/images/svg/onboarding-image-2.svg',
		width: 294,
		height: 237,
		alt: 'A guy with the huge magnifier that magnifies his eye.',
		caption: 'Different goals, different ways to write it down.',
	},
	{
		src: '/images/svg/onboarding-image-3.svg',
		width: 294,
		height: 249,
		alt: 'A girl sitting on the worktable, smiling and looking somewhere.',
		caption: 'Adapt as per your needs.',
	},
]

const currentSlideIndex = shallowRef(0)

/**
 * Increase currentSlideIndex by one each time,
 * while slides length is more than the index.
 *
 * @returns {void}
 */
const addIndex = () => {
	if (slides.length - 1 > currentSlideIndex.value) currentSlideIndex.value++;
	else emits('finish');
};


const isMounted = shallowRef(false);
onMounted(() => isMounted.value = true);
</script>

<style>
.onboarding-slider {
	position: relative;
	display: flex;
	justify-content: center;
	margin-top: 60px;
}

.onboarding-slider__slide {
	position: absolute;
	top: 0;
}

.onboarding__skip {
	display: block;
	width: auto;
	text-align: end;
	margin-top: 23px;
	margin-right: 40px;
	color: var(--light-primary);
	font-size: 16px;
	text-decoration: none;
}
</style>
