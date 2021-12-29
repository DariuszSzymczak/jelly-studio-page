<template>
    <div class="main-outer-box" :id="props.id">
        <div class="sidebar" :style="{width: props.reverse ? '35%' :'65%' }">
            <slot name="left-sidebar"></slot>
        </div>
        <div class="sidebar" :style="{width: props.reverse ? '65%' :'35%' }">
            <slot name="right-sidebar"></slot>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    id: String,
    reverse: {
        default: false,
        type: Boolean
    }
})
</script>

<style  lang="scss" >
.main-outer-box {
    width: 100%;
    display: flex;
    flex-direction: row;
    z-index: 10;
    position: relative;

    h1 {
        font-size: 2.5vw;
        text-transform: uppercase;
    }

    p {
        font-size: 1.2vw;
        text-align: left;
    }
}

.sidebar {
    margin: 2vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  
}
// desktop
@media only screen and (min-width: 601px) {
    .left-sidebar {
        width: 65%;
    }

    .right-sidebar {
        width: 35%;
    }
}

// mobile
@media only screen and (max-width: 600px) {
    .sidebar {
        margin: auto;

         img {
        width: 100%;
        border-radius: 5vw;
        
    }
    }

    .main-outer-box {
        flex-direction: column;
        padding: 2vw;
        h1 {
            font-size: 10vw;
            text-transform: uppercase;
        }

        p {
            font-size: 4vw;
            text-align: left;
        }
    }

    .left-sidebar,
    .right-sidebar {
        width: 100%;
    }
}
</style>