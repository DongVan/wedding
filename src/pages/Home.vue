<script setup>

import SnowFall from "@/components/SnowFall.vue";
import Header from "@/components/Header.vue";
import Carousel from "@/components/Carousel.vue";
import Calendar from "@/components/Calendar.vue";
import Couple from "@/components/Couple.vue";
import Timeline from "@/components/Timeline.vue";
import Video from "@/components/Video.vue";
import Location from "@/components/Location.vue";
import Album from "@/components/Album.vue";
import Donate from "@/components/Donate.vue";
import Thanks from "@/components/Thanks.vue";
import {computed} from "vue";

const mobile = computed(() => {
	return document.querySelector("body").offsetWidth < 768;
});

</script>

<template>
	<Header></Header>

	<Carousel></Carousel>

	<Calendar></Calendar>

	<Couple></Couple>

	<Location></Location>

	<Video></Video>

	<Timeline :mobile="mobile"></Timeline>

	<Album></Album>

	<Donate></Donate>

	<Thanks></Thanks>

	<SnowFall></SnowFall>
</template>

<style scoped>

</style>
