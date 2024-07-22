<script setup>

import Time from "@/components/Time.vue";
import Countdown from "@/components/Countdown.vue";
</script>

<template>
	<div class="calendar-box py-[80px]">
		<div class="container h-100 grid min-[768px]:grid-cols-2 max-[768px]:grid-cols-1 p-6">
			<div class="h-100 bg-white p-6">
				<div class="h-100 d-flex items-center justify-center border-[5px] border-solid border-[var(--brown-border-color)] p-5 text-center">
					<div>
						<p class="font-dancing  text-[3.33333rem] mb-6">Save the Date</p>
						<p class="text-[1.1rem] my-4 py-4">For the wedding of</p>
						<p class="text-[2rem] font-bold my-6 py-6">Đông Văn & Nga Lê</p>
						<p class="text-[1.05rem] my-6 p-6">Sự hiện diện của bạn sẽ là lời chúc tuyệt vời nhất cho ngày hạnh phúc của chúng mình</p>
					</div>
				</div>
			</div>
			<div class="h-100 bg-white p-6">
				<div class="h-100 border-[5px] border-solid border-[var(--brown-border-color)] p-5 text-center">
					<Time></Time>
					<hr class="py-3">
					<Countdown></Countdown>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.calendar-box {
	position: relative;
	min-height: 400px;
	background: url("../assets/photo/bg.png");
}

.calendar-box::before {
	content: '';
	position: absolute;
	top: 20px;
	left: 0;
	background: url("../assets/photo/layer1.png") top left no-repeat;
	background-size: auto;
	width: 100%;
	height: 100%;
}

.calendar-box::after {
	content: '';
	position: absolute;
	bottom: 0;
	right: 0;
	background: url("../assets/photo/layer2.png") bottom right no-repeat;
	width: 100%;
	height: 100%;
}


@media (max-width: 768px) {
	.calendar-box {
		padding: 16px 0 !important;
	}
}
</style>
