<script setup>

import {computed, ref} from "vue";
import Title from "@/components/Title.vue";
import VueGallery from 'vue-gallery';

const index = ref(null);

const gallery = computed(() => {
	let result = [];
	for (let i = 0; i < 15; i++) {
		result.push(`/photo/couple/${i + 1}.jpg`);
	}

	return result;
});

</script>

<template>
	<div class="album-box bg-gray-100 py-[80px]">
		<Title
			title="Album"
			content="Khoảnh khắc này đánh dấu sự khởi đầu của hành trình tuyệt vời cùng nhau."
		></Title>

		<div class="container grid min-[768px]:grid-cols-3 max-[768px]:grid-cols-1 ga-2">
			<div
				class="image cursor-pointer"
				v-for="(record, i) in gallery"
				:key="i"
				@click="index = i"
				:style="{ backgroundImage: `url('${record}')`, height: '250px' }"
			></div>
		</div>

		<VueGallery :images="gallery" :index="index" @close="index = null"></VueGallery>
	</div>
</template>

<style scoped>
.image {
	float: left;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	border: 1px solid #ebebeb;
	margin: 0;
}

@media (max-width: 768px) {
	.image {
		height: 300px !important;
	}
}
</style>
