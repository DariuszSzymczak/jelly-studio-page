<template>
<div class="filtered-grid-projects">
    <JellyImageSquare v-for="item in props.projects" :item="item" :onClick="() =>{openModal(item)}" ></JellyImageSquare>
</div>
</template>


<script setup>
import { defineProps, toRefs } from 'vue';
import JellyImageSquare from './JellyImageSquare.vue';
const props = defineProps({
    projects: Array,
    onClick: Function
})

const openModal = (item) => {
    window.alert(item.name);
}

const { height } = toRefs(props);

</script>

<style scoped>
.filtered-grid-projects{
    margin-top: 4vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
</style>