<script setup>
import LocationCard from "@/components/LocationCard.vue";
import Title from "@/components/Title.vue";
</script>

<template>
	<div class="position-relative bg-gray-200 pt-[60px] max-[768px]:pb-[60px] min-[768px]:pb-[100px]">
		<Title
			title="Địa điểm"
			content="Tại nơi tuyệt đẹp này, tình yêu của chúng ta trở nên vĩnh cửu."
		></Title>

		<div class="container grid min-[768px]:grid-cols-2 max-[768px]:grid-cols-1 pt-4">
			<div class="location-image position-relative min-[768px]:pr-[40px] flex items-center justify-center">
				<div class="min-w-[200px] min-[768px]:w-[80%] h-[400px] bg-white p-2 transform-rotate-350 rounded-[12px]">
					<v-img
						class="rounded-[10px]"
						src="/photo/bg-3.jpg"
						width="100%"
						height="100%"
						cover
					></v-img>
				</div>
			</div>
			<div>
				<LocationCard
					:location="{
						avatar: '/photo/location1.jpeg',
						date: '10-10-2024',
						hour: '10:00',
						address: 'số 21 ngõ lê văn hưu 2 quận hai bà trưng hà nội việt nam',
						link: ''
					}"
				></LocationCard>
				<LocationCard
					:location="{
						avatar: '/photo/location2.jpeg',
						date: '10-10-2024',
						hour: '10:00',
						address: 'số 21 ngõ lê văn hưu 2 quận hai bà trưng hà nội việt nam',
						link: ''
					}"
				></LocationCard>
			</div>
		</div>
	</div>
</template>

<style scoped>
.location-image::before {
	content: '';
	position: absolute;
	top: 20px;
	left: -28px;
	background: url("/src/assets/photo/layer4.png") top left no-repeat;
	background-size: contain;
	width: 120px;
	height: 120px;
	z-index: 1;
}

.location-image::after {
	content: '';
	position: absolute;
	bottom: 0;
	right: 0;
	background: url("/src/assets/photo/layer5.png") top left no-repeat;
	background-size: contain;
	width: 120px;
	height: 120px;
}

.transform-rotate-350 {
	transform: rotate(350deg);
}


@media (max-width: 768px) {
	.transform-rotate-350 {
		width: 100%;
		transform: rotate(0);
		margin-bottom: 16px;
	}

	.location-image::before {
		top: -20px;
		left: -8px;
	}

	.location-image::after {
		bottom: -20px;
		right: -8px;
	}
}
</style>
