<script setup>
import Line from "@/components/Line.vue";
</script>

<template>
	<v-layout>
		<v-app-bar class="border-b-1" height="120" flat>
			<div class="w-full text-center font-dancing font-bold text-[40px]">
				<div class="mb-[-20px]">
					Đông Văn
					<v-icon color="red" size="24">mdi-heart-outline</v-icon>
					Nga Lê
				</div>
				<Line text="Just Married"></Line>
			</div>
		</v-app-bar>
	</v-layout>
</template>

<style scoped>
.border-b-1 {
	border-bottom: 1px solid #eee;
}
</style>
