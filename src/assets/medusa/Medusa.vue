<template>
    <div :class="' move-box move-box' + props.id">
       
            <svg
                :class="'medusa' + props.id"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 504.26 354.44"
            >
                <defs>
                    <linearGradient
                        id="Gradient_bez_nazwy_6"
                        data-name="Gradient bez nazwy 6"
                        x1="103.73"
                        y1="431.57"
                        x2="35.67"
                        y2="459.14"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.25" stop-color="#009fe3" />
                        <stop offset="0.75" stop-color="#b3dac5" />
                    </linearGradient>
                    <linearGradient
                        id="Gradient_bez_nazwy_6-2"
                        x1="176.3"
                        y1="481.7"
                        x2="108.24"
                        y2="509.26"
                        gradientTransform="translate(-260.01 218.23) rotate(-38.82)"
                        xlink:href="#Gradient_bez_nazwy_6"
                    />
                    <linearGradient
                        id="Gradient_bez_nazwy_6-3"
                        x1="213.89"
                        y1="428.98"
                        x2="145.83"
                        y2="456.54"
                        gradientTransform="matrix(-0.99, -0.12, -0.12, 0.99, 685.15, 40.76)"
                        xlink:href="#Gradient_bez_nazwy_6"
                    />
                    <linearGradient
                        id="Gradient_bez_nazwy_6-4"
                        x1="283.43"
                        y1="595.82"
                        x2="214.98"
                        y2="623.54"
                        gradientTransform="matrix(-0.7, -0.71, -0.71, 0.7, 917.45, 288.28)"
                        xlink:href="#Gradient_bez_nazwy_6"
                    />
                    <radialGradient
                        id="Gradient_bez_nazwy_124"
                        data-name="Gradient bez nazwy 124"
                        cx="227"
                        cy="327.59"
                        fx="161.2974237483418"
                        fy="272.6365183087275"
                        r="119.92"
                        gradientTransform="translate(712.13 75.35) rotate(87.06) scale(1 1.52)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.42" stop-color="#b3dac5" />
                        <stop offset="0.49" stop-color="#8cc" />
                        <stop offset="0.57" stop-color="#5fbed3" />
                        <stop offset="0.65" stop-color="#3db3d9" />
                        <stop offset="0.73" stop-color="#2ad" />
                        <stop offset="0.82" stop-color="#0fa4e0" />
                        <stop offset="0.91" stop-color="#04a0e2" />
                        <stop offset="1" stop-color="#009fe3" />
                    </radialGradient>
                </defs>
                <path
                    class="cls-1"
                    d="M205.24,397.2,73.73,484c-24.88,15.39-54.55,4.45-62.47-14s4.42-47.25,32.5-54.89c48-18.67,128.74-45.05,146.45-50.63Z"
                    transform="translate(-8.91 -256.75)"
                />
                <path
                    data-name="leg1"
                    class="cls-2"
                    d="M236.86,392.57l-48,150.1c-9.74,27.58-39.71,37.66-57.44,28.27s-26.17-39.59-9.09-63.14C148,463.16,194.37,392,204.66,376.54Z"
                    transform="translate(-8.91 -256.75)"
                />
                <path
                    data-name="leg1"
                    class="cls-3"
                    d="M344,364.53c16.92,7.64,94,43.41,139.41,67.64,27,10.91,35.77,41.07,25.76,58.35s-40.8,24.7-63.68,6.48L325.19,395.19Z"
                    transform="translate(-8.91 -256.75)"
                />
                <path
                    data-name="leg1"
                    class="cls-4"
                    d="M328.21,374.74c8.39,16.57,46,92.73,66.21,140.1,14.17,25.41,2.12,54.42-16.51,61.61s-47.28-6.33-53.68-34.87L294.34,386.84Zm-45,29.26C286,422.36,298,506.46,302.39,557.76c5.53,28.57-15,52.37-34.91,53.39s-42.94-20.77-40.12-49.89l19.89-156.33Z"
                    transform="translate(-8.91 -256.75)"
                />
                <path
                    class="cls-5"
                    d="M411,368.47c-12.59,10.55-62,49.47-138.68,52.31-88,3.26-146-43.44-156.64-52.31,21.15-47.73,45.72-30.48,66.87-78.21,4.07-3.79,44.21-40,101.23-32.49A119.1,119.1,0,0,1,351,290.26C372.11,338,389.85,320.74,411,368.47Z"
                    transform="translate(-8.91 -256.75)"
                />
            </svg>
        
    </div>
</template>

<script setup>
import { gsap } from "gsap";
import { onMounted } from 'vue';
import randomInt from "../../composables/randomInt"
import { defineProps } from 'vue';
let props = defineProps({
    reverse: Boolean,
    id: Number,
})

let randomY = randomInt(0, 50);

let rotate = gsap.timeline({
    repeat: -1,
    repeatRefresh: true,
    yoyo: true
})



let move = gsap.timeline({
    repeat: -1,
    repeatRefresh: true,
})




onMounted(() => {

    let startRotation = 90;

    if (props.reverse) {
        startRotation += 180;
    }

    console.log(' start rotatiuon: ' + props.reverse + ' | ' + startRotation)

    let randomScale = gsap.utils.random(0.2, 1);

    rotate.add('start')
        .to('.medusa'+ props.id, {
            rotate: startRotation - 30,
            duration: 0
        }, 'start')
        .to('.medusa'+ props.id, {
            rotate: startRotation + 30,
            duration: 1
        }, '>0')





    if (props.reverse === false) {
      
        move.add('start')
            .to('.move-box'+ props.id, {
                y: function () { return getRand(0, 40) + 'vh' },
                x: '-15vw',
                scale: function () { return getRand(0.2, 1) },
                duration: 0,
            }, 'start')
            .to('.move-box'+ props.id, {
                x: '120vw',
                duration: 7,
            }, '>0')
    } else {
   
        move.add('start')
            .to('.move-box'+ props.id, {
                y: function () { return getRand(0, 40) + 'vh' },
                x: '120vw',
                scale: function () { return getRand(0.2, 1) },
                duration: 0,
            }, 'start')
            .to('.move-box'+ props.id, {
                x: '-15vw',
                duration:7,
            }, '>0')
    }

    function getRand(min, max) {
        return Math.random() * (max - min) + min;
    }


})

</script>

<style scoped lang="scss">
.cls-1 {
    fill: url(#Gradient_bez_nazwy_6);
}

.cls-2 {
    fill: url(#Gradient_bez_nazwy_6-2);
}

.cls-3 {
    fill: url(#Gradient_bez_nazwy_6-3);
}

.cls-4 {
    fill: url(#Gradient_bez_nazwy_6-4);
}

.cls-5 {
    fill: url(#Gradient_bez_nazwy_124);
}
</style>