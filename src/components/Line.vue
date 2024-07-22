<script setup>
defineProps({
	text: String
});
</script>

<template>
	<span>{{ text }}</span>
</template>

<style scoped>
span {
	color: #797979;
	font-weight: 300;
	font-size: 1rem;
	display: inline-block;
	position: relative;
	letter-spacing: 2px;
}

span:before {
	content: "";
	background: #ece9e9;
	width: 35px;
	height: 1px;
	position: absolute;
	left: -50px;
	top: 9px;
}

span:after {
	content: "";
	background: #ece9e9;
	width: 35px;
	height: 1px;
	position: absolute;
	right: -50px;
	top: 9px;
}
</style>
