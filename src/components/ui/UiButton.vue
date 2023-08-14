<template>
	<button class="ui-button" :class="appliedClasses" @click="emits('click')">
		<img
			v-if="hasLeftArrow"
			class="ui-button__icon left"
			src="/images/svg/arrow-left.svg"
			width="24"
			height="24"
			alt="Arrow left icon"
		/>

		<slot></slot>

		<img
			v-if="hasRightArrow"
			class="ui-button__icon right"
			src="/images/svg/arrow-right.svg"
			width="24"
			height="24"
			alt="Arrow right icon"
		/>
	</button>
</template>

<script setup>
import { defineEmits, defineProps, computed } from 'vue'

const hasRightArrow = computed(
	() => props.mode.includes('arrow-right') || props.mode.includes('arrow-both')
)

const hasLeftArrow = computed(
	() => props.mode.includes('arrow-left') || props.mode.includes('arrow-both')
)

const appliedClasses = computed(() => {
	const hasShadow = props.mode.includes('shadowed');
	const hasArrows = props.mode.includes('arrow');
	return {
		...props.classes,
		shadowed: hasShadow,
		arrowed: hasArrows,
	}
})

const emits = defineEmits(['click'])

const props = defineProps({
	title: {
		type: [String, null],
		default: null,
	},

	classes: {
		type: Object,
		default: () => ({}),
	},

	mode: {
		type: String,
		default: 'default',
		validate: (v) =>
			[
				'default',
				'shadowed',
				'arrow-right',
				'arrow-left',
				'arrow-both',
				'shadowed-arrow-right',
				'shadowed-arrow-left',
				'shadowed-arrow-both',
			].includes(v),
	},
});
</script>

<style>
.ui-button {
	padding: 25px;
	text-align: center;
	font-size: 20px;
	color: var(--black);
	width: 100%;
	border: 0;
	border-top: 2px solid var(--black);
}

.ui-button.shadowed {
	border: 2px solid var(--black);
	box-shadow: 5px 5px 0px 0px var(--black);
	font-weight: bold;
}

.ui-button.arrowed {
	display: flex;
	justify-content: space-between;
}
</style>
