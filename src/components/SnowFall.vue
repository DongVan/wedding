<script setup>
import {onMounted, ref} from "vue";

const snowflakes = ref([]);

const createSnowflake = () => {
	const rand = Math.random() * 10;
	const snowflake = document.createElement('div');
	const child = document.createElement('i');
	snowflake.appendChild(child);
	snowflake.classList.add('snowflake');
	child.classList.add('mdi');
	if (Math.round(rand) % 2 === 0) {
		child.classList.add('mdi-heart-outline');
	} else {
		child.classList.add('mdi-heart');
	}
	const size = Math.random() * 10 + 5;
	snowflake.style.fontSize = `${size}px`;
	snowflake.style.left = `${Math.random() * window.innerWidth}px`;
	snowflake.style.animationDuration = `${Math.random() * 5 + 6}s`;
	child.style.animationDuration = `${Math.random() * 2 + 2}s`;
	document.body.appendChild(snowflake);
	snowflakes.value.push(snowflake);
};

const toggleSnow = () => {
	if (snowflakes.value.length) {
		snowflakes.value.forEach(snowflake => document.body.removeChild(snowflake));
		snowflakes.value = [];
	} else {
		for (let i = 0; i < 20; i++) {
			createSnowflake();
		}
	}
}

onMounted(() => toggleSnow());
</script>

<template>

</template>

<style>

</style>
