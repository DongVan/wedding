<script setup>

</script>

<template>
	<div class="position-relative footer-box mt-[40px]">
		<div class="couple-box flex items-center justify-center">
			<img src="/photo/couple/2.jpg"/>
		</div>

		<p class="font-dancing text-[72px] mt-[40px]">Thank you!</p>
	</div>
</template>

<style scoped>
.footer-box {
	background: url('/photo/footer-shape.png') center bottom / 100% no-repeat local;
	text-align: center;
	position: relative;
	padding: 80px 40px;
}

.footer-box img {
	margin-top: -80px;
	margin-left: -12px;
	width: 350px;
	height: 350px;
	object-fit: cover;
	border-radius: 50%;
}

.couple-box {
	background: url('/photo/bg-couple.png') center center / cover no-repeat local;
	width: 511px;
	height: 470px;
	margin: 0 auto;
	position: relative;
}

@media (max-width: 768px) {
	.footer-box {
		padding: 80px 0;
	}

	.couple-box {
		width: 100%;
	}
}
</style>