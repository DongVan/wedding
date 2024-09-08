<script setup>

import Title from "@/components/Title.vue";
</script>

<template>
	<div class="bg-gray-50">
		<div class="max-w-[952px] m-auto py-[80px] ">
			<Title
				title="Hộp mừng cưới"
				content="Tình cảm và sự ủng hộ của các bạn là món quà lớn nhất mà chúng tôi có thể nhận được. Cảm ơn các bạn rất nhiều."
			></Title>

			<div class="container grid min-[768px]:grid-cols-2 ga-4">
				<div class="border-4 border-[var(--brown-color)] p-5 text-center rounded-[12px]">
					<p class="font-bold text-[1.2rem]">Mừng cưới đến chú rể</p>
					<div class="my-4">

						<img src="/photo/qr1.png" class="w-full max-w-[200px] m-auto">
					</div>
					<p class="mb-2">Ngân hàng: <b>Techcombank</b></p>
					<p class="mb-2">Tên tài khoản: <b>Nguyen Van Dong</b></p>
					<p>Số tài khoản: <b>19031213940019</b></p>
				</div>

				<div class="border-4 border-[var(--brown-color)] p-5 text-center rounded-[12px]">
					<p class="font-bold text-[1.2rem]">Mừng cưới đến cô dâu</p>
					<div class="my-4">
						<img src="/photo/qr1.png" class="w-full max-w-[200px] m-auto">
					</div>
					<p class="mb-2">Ngân hàng: <b>Techcombank</b></p>
					<p class="mb-2">Tên tài khoản: <b>Le Thi Nga</b></p>
					<p>Số tài khoản: <b>19031213940019</b></p>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>
