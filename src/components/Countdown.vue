<script setup>
import {onMounted, ref} from "vue";
const days = ref(0);
const hours = ref('');
const minutes = ref('');
const seconds = ref('');
const targetDate = ref(new Date("Nov 10, 2024 10:00:00").getTime());

const fillTime = (time) => {
	return `0${time}`.slice(-2);
}

const countdown = () => {
	const now = new Date().getTime();
	const gap = targetDate.value - now;
	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;
	days.value = Math.floor(gap / day);
	hours.value = fillTime(Math.floor((gap % day) / hour));
	minutes.value = fillTime(Math.floor((gap % hour) / minute));
	seconds.value = fillTime(Math.floor((gap % minute) / second));
};

onMounted(() => {
	countdown();
	setInterval(countdown, 1000);
});
</script>

<template>
	<div class="flex justify-around space-x-4 font-italic text-[var(--brown-color)] px-5">
		<div class="text-center">
			<div class="text-4xl font-bold">{{ days }}</div>
			<div class="text-sm text-gray-500">Ngày</div>
		</div>
		<div class="text-center">
			<div class="text-4xl font-bold">{{ hours }}</div>
			<div class="text-sm text-gray-500">Giờ</div>
		</div>
		<div class="text-center">
			<div class="text-4xl font-bold">{{ minutes }}</div>
			<div class="text-sm text-gray-500">Phút</div>
		</div>
		<div class="text-center">
			<div class="text-4xl font-bold">{{ seconds }}</div>
			<div class="text-sm text-gray-500">Giây</div>
		</div>
	</div>
</template>

<style scoped>

</style>
