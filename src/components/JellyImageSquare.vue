<template>
    <div class="jelly-image-square" @click="onClick" :id="item.name">
        <img :src="props.item.images[0]"  :class="props.item.category == 'grafika'  ? 'grafika' : ''"/>
        <p>{{ item.name }}</p>
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
    item: Object,
    onClick: Function
})



</script>

<style lang="scss">
.jelly-image-square {
    color: white;
    font-size: 1.2vw;
    cursor: pointer;
    text-decoration: none;
    width: 30vw;
    height: 14vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1vw 1vw;
    -webkit-box-shadow: 0px 16px 24px -12px rgba(66, 68, 90, 0.5);
    -moz-box-shadow: 0px 16px 24px -12px rgba(66, 68, 90, 0.5);
    box-shadow: 0px 16px 24px -12px rgba(66, 68, 90, 0.5);
    transition: 0.5s;
    overflow: hidden;

    img {
        width: 100%;
        position: relative;
        z-index: 5;
    }

    .grafika {
        width: auto;
        height: 14vw;
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
        background: linear-gradient(
            180deg,
            rgba(109, 109, 109, 0) 0%,
            #5e5e5e 100%
        );
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
        margin-bottom: 3vh;
        img {
            width: auto;
            height: 17vh;
        }

        p {
            color: #36fcc0 !important;
            font-size: 7vw;
            padding: 5vw 0;
            padding-top: 9vw;
            font-weight: bold;
            margin-top: 26vw;
            width: 76vw;
            text-align: center;
            background: linear-gradient(
                180deg,
                rgba(109, 109, 109, 0) 0%,
                #5e5e5e 100%
            );
            position: absolute;
            z-index: 10;
        }
    }
}
</style>