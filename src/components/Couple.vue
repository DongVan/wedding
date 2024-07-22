<script setup>
import CoupleInfo from "@/components/CoupleInfo.vue";
import Title from "@/components/Title.vue";
</script>

<template>
	<div class="couple-box py-[80px]">
		<Title title="Cô dâu & Chú rể"
		       content="Tình yêu chân thành không đòi hỏi phải hoàn hảo, chỉ cần chân thật và hết lòng."
		></Title>

		<div class="container">
			<CoupleInfo
				photo="/photo/couple/5.jpg"
				title="Nga Lê"
				description="❝ Em luôn tin rằng tình yêu đích thực không phải là tìm kiếm người hoàn hảo, mà là tìm thấy một người hoàn hảo trong mắt mình. Anh là người mà em luôn tìm kiếm, người khiến em cảm thấy an yên và hạnh phúc. Hôm nay, em hứa sẽ yêu anh với tất cả trái tim, tôn trọng và ủng hộ anh trong mọi quyết định, và cùng anh xây dựng một gia đình tràn đầy tình yêu và sự hiểu biết ❞"
			></CoupleInfo>

			<CoupleInfo
				reverse
				photo="/photo/couple/7.jpg"
				title="Đông Văn"
				description="❝ Anh yêu em không chỉ vì em là ai, mà còn vì khi ở bên em, anh trở thành người mà anh luôn mong muốn. Anh yêu em vì những điều nhỏ nhặt mà em làm, những nụ cười và tiếng cười của em, và cách em làm cho thế giới của anh trở nên tươi đẹp hơn. Anh yêu em vì em giúp anh trở thành phiên bản tốt nhất của chính mình ❞"
			></CoupleInfo>
		</div>
	</div>
</template>

<style scoped>

</style>
