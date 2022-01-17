<template>
    <span class="jelly-image-box">
        <div
            class="jelly-image-square"
            @click="onClick"
            :id="item.name"
            :class="props.circle ? 'jelly-circle-image' : ''"
        >
            <img :src="imageUrl" :class="props.item.category == 'grafika' ? 'grafika' : ''" />
            <p v-if="!props.circle" class="jelly-image-square-p">{{ item.name }}</p>
        </div>
        <p v-if="props.circle" class="jelly-image-circle-p">{{ item.name }}</p>
    </span>
</template>

<script setup>
import { defineProps, ref } from 'vue';
const imageUrl = ref(props.item.images[0])
const props = defineProps({
    item: Object,
    onClick: Function,
    circle: {
        type: Boolean,
        default: false,
    }
})



</script>

<style lang="scss">
.jelly-image-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
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

    .jelly-image-square-p {
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

.jelly-circle-image {
    border-radius: 30vw;
    width: 15vw;
    height: 15vw;
}

.jelly-image-circle-p {
    color: black;
    font-size: 2vw;
    color: darkcyan;
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

        .jelly-image-square-p {
            color: #36fcc0 !important;
            font-size: 7vw;
            padding: 5vw 0;
            padding-top: 22vw;
            font-weight: bold;
            margin-top: 26vw;
            width: 92vw;
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

    .jelly-image-square {
        font-size: 2vw;
        width: 92vw;
        height: auto;
        margin: 2vw;
        margin-bottom: 2vw;
        margin-bottom: 3vh;

        img {
            height: 27vh;
        }
    }
    .jelly-circle-image {
        border-radius: 44vw;
        width: 50vw;
        height: 50vw;
    }
    .jelly-image-circle-p {
        color: black;
        font-size: 7vw;
        color: darkcyan;
    }

    .grafika {
        width: auto;
        height: 50vw !important;
    }
    .jelly-image-box {
        margin-bottom: 3vw;
    }
}
</style>