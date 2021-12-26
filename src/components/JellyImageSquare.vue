<template>
    <div class="jelly-image-square">
        <img :src="path" />
        <p>{{ item.name }}</p>
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
    item: Object,
    onClick: Function
})
const path = ref(new URL(`../assets/projects/${props.item.images[0]}`, import.meta.url));

</script>

<style lang="scss">
.jelly-image-square {
    color: white;
    font-size: 1.2vw;
    cursor: pointer;
    text-decoration: none;
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 2vw;
    -webkit-box-shadow: 0px 16px 24px -12px rgba(66, 68, 90, 0.5);
    -moz-box-shadow: 0px 16px 24px -12px rgba(66, 68, 90, 0.5);
    box-shadow: 0px 16px 24px -12px rgba(66, 68, 90, 0.5);
    transition: 0.5s;

    img {
        width: 100%;
        height: auto;
        position: relative;
        z-index: 5;
    }

    &:hover {
        background: #e76610 !important;
    }

    p {
        color: #10e7a7 !important;
        font-size: 2vw;
        padding: 2vw 0;
        margin-top: 11vw;
        width: inherit;
        text-align: center;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #19201e 100%);
        position: absolute;
        z-index: 10;
    }
}

@media only screen and (max-width: 600px) {
    .jelly-square {
        width: 15vw;
        height: 15vw;
        font-size: 6vw;

        img {
            width: 10vw;
        }
    }
}
</style>