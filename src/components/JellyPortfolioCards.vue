<template>
    <div class="filtered-grid-projects">
        <JellyImageSquare
            v-for="item in props.projects"
            :item="item"
            :onClick="() => { openModal(item) }"
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
            </template>
            <template v-slot:right-sidebar>
                    <img :src="bigImagePath">
                <div id="projects-modal-thumbnails">
                    <img v-for="item in thumbImagesPaths" :src="item" @click="() => {changeBigImage(item)}" />
                </div>
            </template>
        </JellyGrid>
          <img v-if="!activeItem.description"  :src="bigImagePath" id="centered-image"/>
    </div>
</template>


<script setup>
import { defineProps, toRefs, ref } from 'vue';
import JellyImageSquare from './JellyImageSquare.vue';
import JellyGrid from './JellyGrid.vue';
const props = defineProps({
    projects: Array,
    onClick: Function
})

const isModalOpen = ref(false);
const activeItem = ref({});
const thumbImagesPaths = ref([]);
const bigImagePath = ref('');

const generatePaths = (item) => {
    const newList = [];

    for (let x = 0; x < item.images.length; x++) {
        if (x == 0) {
            bigImagePath.value =  new URL('../'+item.images[x], import.meta.url)
        } else {
            newList.push(new URL('../'+item.images[x], import.meta.url))
        }
    }

    thumbImagesPaths.value = newList;
}

const changeBigImage = (image) =>{
    let tempOldBigImage = bigImagePath.value;
    bigImagePath.value = image;
    const newList = [];

    thumbImagesPaths.value.forEach(item => {
        if( item.href === image.href){
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

#centered-image{
    margin:auto;
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
    background-color: #1d1d1d;
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

#projects-modal-thumbnails{
    display: flex;
    position: relative;
    top: 2vw;
    justify-content:center;
    width: 100%;
    margin: auto;

    img{
        width: 10vw;
        margin: 1vw;
        margin-top:0;
    }
}
</style>