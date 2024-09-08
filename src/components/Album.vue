<script setup>

import {computed, ref} from "vue";
import Title from "@/components/Title.vue";
import VueEasyLightbox from 'vue-easy-lightbox'
import 'vue-easy-lightbox/external-css/vue-easy-lightbox.css'

const visibleRef = ref(false)
const indexRef = ref(null);

const showImg = (index) => {
	indexRef.value = index
	visibleRef.value = true
}
const onHide = () => visibleRef.value = false

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
				@click="() => showImg(i)"
				:style="{ backgroundImage: `url('${record}')`, height: '400px' }"
			></div>
		</div>

		<VueEasyLightbox
			:visible="visibleRef"
			:imgs="gallery"
			:index="indexRef"
			zoomDisabled
			scrollDisabled
			:loop="true"
			@hide="onHide"
		></VueEasyLightbox>
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
