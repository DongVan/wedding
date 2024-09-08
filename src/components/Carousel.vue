<script setup>

import Line from "@/components/Line.vue";
const images = [
	'/photo/couple/2.jpg',
	'/photo/couple/4.jpg',
];

</script>

<template>
	<v-carousel class="mt-[120px]" height="650px" :hide-delimiter-background="true" show-arrows="hover" cycle>
		<v-carousel-item
			v-for="record in images"
			:key="record"
			:src="record"
			cover
		>
			<div class="d-flex fill-height justify-center align-center bg-[rgba(0,0,0,0.4)]">
				<div class="text-white text-center">
					<div class="text-[4rem] font-dancing letter-spacing4">
						Đông Văn
						<v-icon class="mt-[-12px] display-block" size="38" color="red">mdi-heart-outline</v-icon>
						Nga Lê
					</div>
					<p class="mt-2">
						<Line class="text-white " text="10 tháng 11 năm 2024"></Line>
					</p>
				</div>
			</div>
		</v-carousel-item>
	</v-carousel>
</template>

<style scoped>
.letter-spacing4 {
	letter-spacing: 4px !important;
}

@media (max-width: 768px) {
	.display-block {
		display: block;
		margin: auto !important;
	}
}

</style>
