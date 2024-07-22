<script setup>
defineProps({
	title: String,
	content: String
});
</script>

<template>
	<div class="text-center mb-[40px]">
		<v-img
			:aspect-ratio="1"
			src="/photo/layer3.png"
			height="60px"
			contain
		></v-img>
		<p class="font-dancing font-bold text-[40px] mb-4">{{ title }}</p>
		<p class="lowercase w-[80%] m-auto">❝ {{ content }} ❞</p>
	</div>
</template>

<style scoped>

</style>
