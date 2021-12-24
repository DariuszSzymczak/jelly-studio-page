<script setup>
</script>

<template>
	<router-view></router-view>
</template>

<style>
@font-face {
	font-family: "Overlock";
	src: local("Overlock"),
		url(./assets/fonts/Overlock/Overlock-Regular.ttf) format("truetype");
}

* {
	font-family: Overlock;
	
}

body, #app{ 
	overflow-x: hidden !important;
	position:relative;
}

.centered-flex {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
</style>
