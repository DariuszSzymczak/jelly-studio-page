<template>
    <a :href="props.link">
        <div class="jelly-square" :style="{ background: props.color }">
            <img v-if="props.icon != ''" :src="path" />
            {{ text }}
        </div>
    </a>
</template>

<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
    link: {
        type: String,
        default: ""
    },
    color: {
        type: String,
        default: "white"
    },
    icon: {
        type: String,
        default: ''
    },
    text: {
        type: String,
        default: ''
    }
})

const path = ref(new URL(`../assets/feather/${props.icon}.svg`, import.meta.url));


</script>

<style lang="scss">

  a {
        text-decoration: none;
    }

.jelly-square {
    color: white;
    border: solid 0.2vw #013b3b;
    padding: 1vw;
    border-radius: 2vw;
    font-size: 1.2vw;
    cursor: pointer;
    text-decoration: none;
    width: 5vw;
    height: 5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 2vw;
    -webkit-box-shadow: 0px 16px 24px -12px rgba(66, 68, 90, 0.5);
    -moz-box-shadow: 0px 16px 24px -12px rgba(66, 68, 90, 0.5);
    box-shadow: 0px 16px 24px -12px rgba(66, 68, 90, 0.5);
    transition: 0.5s;
    img {
        width: 2vw;
        filter: invert(100%) sepia(0%) saturate(7455%) hue-rotate(54deg)
            brightness(99%) contrast(110%);
    }

    &:hover {
        background: #e76610 !important;
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