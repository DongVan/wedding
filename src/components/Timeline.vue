<script setup>
import Title from "@/components/Title.vue";

defineProps({
	mobile: Boolean
});
</script>

<template>
	<div class="timeline-box py-[80px]">
		<Title
			title="Câu chuyện của chúng tôi"
			content="Cuộc sống là sự gặp gỡ của hai linh hồn, nhưng tình yêu là sự giao hòa của hai trái tim."
		></Title>

		<div class="container">
			<v-timeline
				class="pt-[40px]"
				align="center"
				:side="mobile ? 'start' : ''"
				:size="mobile ? 'x-small' : ''"
			>
				<v-timeline-item>
					<template v-slot:opposite>
						<div class="text-[26px] min-[768px]:py-2">Bạn có tin lần đầu gặp đã iu? ⚡</div>
						<v-img
							class="my-3"
							src="/photo/couple/17.jpg"
							width="100%"
							height="300"
							cover
							v-if="mobile"
						></v-img>
						<p class="text-[var(--brown-color)] my-1">28-10-2023</p>
						<p>
							Chúng tôi gặp nhau lần đầu tiên trong một chuyến leo núi. Ngày hôm đó, không khí trong lành và cảnh vật hùng vĩ đã tạo nên
							một khung cảnh tuyệt vời. Khi tôi nhìn thấy em lần đầu tiên, em đang đứng ở điểm dừng chân, ánh mắt lạc quan và nụ cười
							tươi tắn. Chúng tôi bắt đầu trò chuyện và ngay lập tức cảm thấy sự kết nối đặc biệt.
						</p>
						<p>Trong suốt chuyến leo núi, chúng tôi cùng nhau vượt qua những đoạn đường dốc, chia sẻ những câu chuyện và giúp đỡ nhau.
							Khi đến đỉnh núi và ngắm nhìn khung cảnh tuyệt đẹp phía dưới, tôi nhận ra rằng điều quan trọng nhất không phải là đích
							đến, mà là hành trình và người đồng hành bên cạnh mình.
						</p>
						<p>
							Hôm nay, khi nhìn lại, tôi thấy rằng khoảnh khắc đầu tiên đó chính là khởi đầu của một hành trình đầy yêu thương và gắn
							bó, mà tôi rất hạnh phúc được chia sẻ cùng em.
						</p>
					</template>
					<div>
						<v-img
							src="/photo/couple/17.jpg"
							width="100%"
							height="300"
							cover
						></v-img>
					</div>
				</v-timeline-item>
				<v-timeline-item>
					<template v-slot:opposite>
						<div class="text-[26px]  min-[768px]:py-2">Lời Tỏ Tình Dễ Thương 💌</div>
						<v-img
							class="my-3"
							src="/photo/couple/19.jpg"
							width="100%"
							height="300"
							cover
							v-if="mobile"
						></v-img>
						<p class="text-[var(--brown-color)] my-1">03-03-2023</p>
						<p>
							Hôm đó, chúng tôi quyết định đạp xe quanh Hồ Tây, một hành trình đáng mong đợi. Nhưng giữa chừng, chiếc xe của em gặp sự
							cố và bị hỏng giữa đường. Thay vì để sự cố nhỏ này làm hỏng kế hoạch của chúng tôi, tôi đã vui vẻ đẩy xe và đưa em về.
							Dù vậy, chúng tôi vẫn quyết định không để khó khăn làm giảm niềm vui và tiếp tục buổi tối với trận bóng đá mà chúng tôi đã
							háo hức chờ đợi.
						</p>
						<p>
							Khi trận đấu diễn ra, không khí sôi động và hào hứng bao trùm lấy chúng tôi. Tôi cảm thấy sự hồi hộp không chỉ vì diễn
							biến của trận đấu, mà còn vì cảm xúc mãnh liệt trong lòng mình dành cho em. Khi tiếng còi kết thúc trận đấu vang lên, giữa
							tiếng cổ vũ và sự phấn khích của đám đông, tôi đã quyết định dũng cảm bày tỏ tình cảm của mình.
						</p>
						<p>
							Khi em đáp lại bằng một nụ cười rạng rỡ và đồng ý, tất cả những khó khăn trước đó bỗng chốc trở nên đáng giá. Đó chính là
							khoảnh khắc tôi nhận ra rằng, dù hành trình có đầy thử thách, thành quả đạt được lại trở nên thật đẹp và ý nghĩa.
						</p>
					</template>
					<div>
						<v-img
							class="mb-3"
							src="/photo/couple/19.jpg"
							width="100%"
							height="500px"
							cover
						></v-img>
					</div>
				</v-timeline-item>
				<v-timeline-item>
					<template v-slot:opposite>
						<div class="text-[26px] min-[768px]:py-2">Kỉ niệm ngọt ngào ❤️</div>
						<v-img
							class="my-3"
							src="/photo/couple/11.jpg"
							width="100%"
							height="300"
							cover
							v-if="mobile"
						></v-img>
						<p class="text-[var(--brown-color)] my-1">2023-2024
						</p>
						<p>
							Cảm ơn vì mình đã luôn là một phần trong cuộc sống của nhau và cùng "enjoy moment này". Em và anh không chỉ là người yêu
							mà chúng ta còn là tri kỷ. Dù chúng ta không phải là 2 mảnh ghép hoàn hảo nhất nhưng anh tin chúng mình sẽ học được cách
							yêu thương mỗi sự khác biệt của nhau.
						</p>
					</template>
					<div>
						<v-img
							src="/photo/couple/11.jpg"
							width="100%"
							height="500px"
							cover
						></v-img>
					</div>
				</v-timeline-item>
				<v-timeline-item>
					<template v-slot:opposite>
						<div class="text-[26px] min-[768px]:py-2">Ngày Lễ Đính Hôn 💍</div>
						<v-img
							class="my-3"
							src="/photo/30.jpeg"
							width="100%"
							height="300"
							cover
							v-if="mobile"
						></v-img>
						<p class="text-[var(--brown-color)] my-1">10-11-2024</p>
						<p>
							Tiếng trái tim đôi ta đập thật nhanh. Thì thầm lời yêu thương. Ngày tình về chung đôi...” Sau bao nhiêu chờ đợi, cuối
							cùng ngày vui của chúng ta cũng tới rồi. Cảm ơn vì mình đã luôn là một phần trong cuộc sống của nhau. Em và anh không chỉ
							là người yêu mà chúng ta còn là tri kỷ. Ngày hôm nay, em sẽ là cô dâu của anh và sau này sẽ là mẹ của các con anh.
						</p>
					</template>
					<div>
						<v-img
							src="/photo/30.jpeg"
							width="100%"
							height="500px"
							cover
						></v-img>
					</div>
				</v-timeline-item>
			</v-timeline>
		</div>
	</div>
</template>

<style>
.v-timeline .v-timeline-item .v-timeline-item__opposite {
	padding: 20px 0;
}

.timeline-box .v-img {
	position: relative;
}

.timeline-box .v-img:hover {
	opacity: 0.9;
}

.timeline-box .v-img:before {
	content: "";
	position: absolute;
	border: 2px solid #fbfbfbad;
	top: 18px;
	left: 18px;
	right: 18px;
	bottom: 18px;
	-webkit-transition: all .6s ease-in-out;
	-o-transition: all .6s ease-in-out;
	transition: all .6s ease-in-out;
	cursor: pointer;
}

@media (max-width: 768px) {
	.v-timeline-item__body,
	.v-timeline-divider {
		display: none;
	}

	.v-timeline-item__opposite {
		padding: 0 20px !important;
		grid-column: 1;
	}
}
</style>
