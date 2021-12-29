<template>
    <div class="jelly-image-square" @click="onClick">
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
    width: 30vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1vw 1vw;
    -webkit-box-shadow: 0px 16px 24px -12px rgba(66, 68, 90, 0.5);
    -moz-box-shadow: 0px 16px 24px -12px rgba(66, 68, 90, 0.5);
    box-shadow: 0px 16px 24px -12px rgba(66, 68, 90, 0.5);
    transition: 0.5s;

    img {
        width: 100%;
        height: 14vw;
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
        margin-top: 9.7vw;
        width: inherit;
        text-align: center;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #19201e 100%);
        position: absolute;
        z-index: 10;
    }
}

@media only screen and (max-width: 600px) {
    .jelly-image-square {
        font-size: 6vw;
        width: 90vw;
        height: auto;
        margin: 2vw;

        img {
            width: 100%;
            height: auto;
        }

        p {
            color: #10e7a7 !important;
            font-size: 6vw;
            padding: 5vw 0;
            margin-top: 26vw;
            width: 76vw;
            text-align: center;
            background: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0) 0%,
                #19201e 100%
            );
            position: absolute;
            z-index: 10;
        }
    }
}
</style>