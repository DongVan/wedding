<script setup>
defineProps({
	title: String,
	content: String
});
</script>

<template>
	<div class="position-absolute top-0 left-0 w-full h-full text-white bg-[rgba(0,0,0,0.3)] flex items-center justify-center">
		<div class="text-center w-[70%]">
			<p class="text-[40px]">{{ title }}</p>
			<p>{{ content }}</p>
		</div>
	</div>
</template>

<style scoped>

</style>
