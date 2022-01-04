<template>
    <div class="filtered-grid-projects">
        <JellyImageSquare
            v-for="item in props.data"
            :item="item"
            :onClick="() => { openModal(item) }"
            :circle="props.circle"
        ></JellyImageSquare>
    </div>

    <div id="projects-modal-graybox" v-if="isModalOpen"></div>
    <div id="projects-modal" v-if="isModalOpen">
        <div id="projects-modal-x">
            <h1>{{ activeItem.name }}</h1>
            <img src="../assets/feather/x.svg" @click="closeModal" />
        </div>
        <JellyGrid v-if="activeItem.description" reverse id="projects-modal-grid">
            <template v-slot:left-sidebar>
                <p>{{ activeItem.description }}</p>
                <div id="projects-modal-link">
                    <img src="../assets/feather/link.svg" />
                    <a
                        :href="activeItem.url"
                        target="_blank"
                        rel="noopener noreferrer"
                    >{{ activeItem.url }}</a>
                </div>
            </template>
            <template v-slot:right-sidebar>
                <!-- <img :src="testImg" /> -->
                <div id="projects-modal-big" :style="{background: `url(${bigImage})`}"></div>
                <div id="projects-modal-thumbnails">
                    <img
                        v-for="item in thumbImagesPaths"
                        :src="item"
                        @click="() => { changeBigImage(item) }"
                    />
                </div>
            </template>
        </JellyGrid>
        <img v-if="!activeItem.description" :src="bigImage" id="centered-image" />
    </div>
</template>


<script setup>
import { defineProps, toRefs, ref } from 'vue';
import JellyImageSquare from './JellyImageSquare.vue';
import JellyGrid from './JellyGrid.vue';
const bigImage = ref(new URL('../assets/partners/ela.jpg', import.meta.url));

const props = defineProps({
    data: Array,
    onClick: Function,
    circle: {
        type: Boolean,
        default: false,
    }
})

const isModalOpen = ref(false);
const activeItem = ref({});
const thumbImagesPaths = ref([]);
const bigImagePath = ref('');

const generatePaths = (item) => {
    const newList = [];

    for (let imageIndex = 0; imageIndex < item.images.length; imageIndex++) {
        if (imageIndex == 0) {
            bigImage.value = new URL('../'+item.images[imageIndex], import.meta.url);
        } else {
            newList.push(new URL('../'+item.images[imageIndex], import.meta.url))
        }
    }

    thumbImagesPaths.value = newList;
}

const changeBigImage = (image) => {
    let tempOldBigImage = bigImage.value;
    bigImage.value = image;
    const newList = [];

    thumbImagesPaths.value.forEach(item => {
        console.log(item.href)
        if (item.href === image.href) {
            newList.push(tempOldBigImage);
        } else {
            newList.push(item);
        }
    })

    thumbImagesPaths.value = newList;
}


const openModal = (item) => {
   
    
  
    generatePaths(item);
    isModalOpen.value = true;
    activeItem.value = item;
}

const closeModal = (item) => {
    isModalOpen.value = false;
}


</script>

<style scoped lang="scss">
* {
    color: white;
}

#projects-modal-big {
    background-size: cover !important;
    background-color: pink;
    width: 38vw;
    height: 20vw;
}

#centered-image {
    margin: 0 auto;
    height: 52vh;
}

.filtered-grid-projects {
    margin-top: 4vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 80vw;
}

#projects-modal {
    position: fixed;
    top: 5vh;
    width: 90vw;
    margin: auto;
    min-height: 90vh;
    background-image: linear-gradient(to bottom, #424242, #1a1a1a);
    z-index: 100;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
}

#projects-modal-x {
    width: 100%;
    display: flex;
    justify-content: space-between;

    h1 {
        font-size: 2.5vw;
        padding: 2vw;
        padding-bottom: 0;
    }

    img {
        padding: 2vw;
        padding-bottom: 0;
        cursor: pointer;
        transition: 0.5s;
        width: 5vw;
        filter: invert(92%) sepia(0%) saturate(4022%) hue-rotate(126deg)
            brightness(110%) contrast(106%);

        &:hover {
            filter: invert(42%) sepia(60%) saturate(2392%) hue-rotate(351deg)
                brightness(104%) contrast(99%);
        }
    }
}

#projects-modal-graybox {
    display: block;
    position: fixed;
    z-index: 40;
    background: rgba(0, 0, 0, 0.788);
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
}

#projects-modal-grid {
    img {
        width: 80%;
    }
}

#projects-modal-thumbnails {
    display: flex;
    position: relative;
    top: 2vw;
    justify-content: center;
    width: 100%;
    margin: auto;

    img {
        width: 10vw;
        margin: 1vw;
        margin-top: 0;
    }
}

#projects-modal-link {
    margin-top: 2vw;
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    font-size: 1.5vw;
    a {
        color: #00c8d4;
    }
    img {
        width: 2vw;
        margin-right: 0.7vw;
        filter: invert(63%) sepia(39%) saturate(5147%) hue-rotate(143deg)
            brightness(101%) contrast(101%);
    }
}
</style>