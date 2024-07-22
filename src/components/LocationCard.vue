<script setup>
defineProps({
	location: Object
});
</script>

<template>
	<div
		class="shadow-sm bg-[#fafafa] grid grid-cols-5 p-5 text-[0.82rem] mb-4 rounded-[12px]"
		v-if="location"
	>
		<div class="col-span-2 bg-white p-1 rounded-[12px]">
			<v-img
				class="rounded-[10px]"
				:src="location.avatar"
				width="100%"
				height="150"
				cover
			></v-img>
		</div>
		<div class="col-span-3 ml-4 p-2">
			<p class="mt-3 mb-3">
				<v-icon class="mt-[-4px]" size="20">mdi-calendar</v-icon>
				{{ location.date }}
				<v-icon class="mt-[-4px] ml-4" size="20">mdi-clock-outline</v-icon>
				{{ location.hour }}
			</p>
			<p class="mb-3">
				<v-icon>mdi-map-marker-radius</v-icon>
				{{ location.address }}
			</p>
			<p class="ml-1 text-[0.75rem]">
				<a :href="location.link" class="text-[blue] hover:text-[#000]">Xem bản đồ
					<v-icon size="20">mdi-menu-right</v-icon>
				</a>
			</p>
		</div>
	</div>
</template>

<style scoped>

</style>
