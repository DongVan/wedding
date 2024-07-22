<script setup>
import {computed} from "vue";

defineProps({
	photo: String,
	title: String,
	description: String,
	reverse: {
		default: false,
		type: Boolean
	}
});


const mobile = computed(() => {
	return document.querySelector("body").offsetWidth < 768;
});

</script>

<template>
	<div class="grid min-[768px]:grid-cols-2 max-[768px]:grid-cols-1">
		<div class="image-box" v-if="!reverse || mobile">
			<v-img
				:aspect-ratio="1"
				class="bg-white"
				:src="photo"
				width="100%"
				height="460px"
				cover
			></v-img>
		</div>
		<div class="flex align-center bg-gray-100 min-[768px]:px-6 max-[768px]:pt-6 max-[768px]:pb-[32px]">
			<div class="px-6">
				<p class="font-dancing text-[40px] mb-4 font-bold">{{ title }}</p>
				<p class="lowercase">{{ description }}</p>
			</div>
		</div>
		<div class="image-box" v-if="reverse && !mobile">
			<v-img
				:aspect-ratio="1"
				class="bg-white"
				:src="photo"
				width="100%"
				height="460px"
				cover
			></v-img>
		</div>
	</div>
</template>

<style scoped>

</style>
