<template>
    <div id="navs">
        <nav id="nav-top">
            <img :src="menuPath"   @click="menuButtonClick"/>
            <a href="#author-section" v-smooth-scroll>Autor</a>
            <a href="#projects-section"  v-smooth-scroll>Projekty</a>
            <a href="#services"  v-smooth-scroll>Usługi</a>
            <a href="#contact"  v-smooth-scroll class="last-nav">Kontakt</a>        
        </nav>

        <nav id="mobile-nav" v-if="isMenuOpen">
            <a href="#author-section" @click="hideMenu"  v-smooth-scroll>Autor</a>
            <a href="#projects-section" @click="hideMenu"  v-smooth-scroll>Projekty</a>
            <a href="#services" @click="hideMenu"  v-smooth-scroll>Usługi</a>
            <a href="#contact" @click="hideMenu"  v-smooth-scroll >Kontakt</a>            
        </nav>
    </div>
</template>


<script setup>
import { ref } from 'vue';
const isMenuOpen = ref(false);
const menuPath = ref (new URL(`../assets/feather/menu.svg`, import.meta.url));


const menuButtonClick = () => {
    isMenuOpen.value = !isMenuOpen.value
    if (isMenuOpen.value){
        menuPath.value = new URL(`../assets/feather/x.svg`, import.meta.url);
    } else {
        menuPath.value = new URL(`../assets/feather/menu.svg`, import.meta.url);
    }
}

const hideMenu = () => {
    isMenuOpen.value = false;
    menuPath.value = new URL(`../assets/feather/menu.svg`, import.meta.url);
}

</script>

<style lang="scss" scoped>
* {
    transition: 0.4s;
}


// desktop  / tablets 
@media only screen and (min-width: 601px) {
    #nav-top {
        position: fixed;
        top: 2vw;
        right: 2vw;
        background: #00584c86;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 1vw;
        z-index: 20;
        padding: 0.5vw;
        a {
            color: #00ff75;
            text-decoration: none;
            font-size: 1.4vw;
            margin: 1vw 0;
            border-right: 0.1vw solid #00ff75;
            padding: 0 1vw;
            &:hover {
                color: #ffffff;
            }
        }

        .last-nav{
            border: none;
        }

        img {
            display: NONE;
        }
    }

    #mobile-nav {
        display: none;
    }
}

// mobile
@media only screen and (max-width: 600px) {
    #navs {
        width: 100vw;
        position: fixed;
        top: 0vw;
        left: 0vw;
        z-index: 100;
        overflow: hidden;
    }
    #nav-top {
        width: 100%;
        background: #00584c86;
        display: flex;
        align-items: center;
        justify-content: center;

        a {
            display: none;
        }

        img {         
            width: 12vw;
            padding: 3vw;
            cursor: pointer;
            filter: invert(92%) sepia(0%) saturate(4022%) hue-rotate(126deg)
                brightness(110%) contrast(106%);
            &:active {
                filter: invert(42%) sepia(60%) saturate(2392%)
                    hue-rotate(351deg) brightness(104%) contrast(99%);
            }
        }
    }

    #mobile-nav {
        display: flex;
        flex-direction: column;
        z-index: 100;
        width: 100vw;

        a{
            padding: 5vw;
            font-size: 5vw;
            text-align: center;
             z-index: 100;
             background: #001a16ea;
             color: white;
             text-decoration: none;
             border-bottom: 0.1vw solid rgb(26, 110, 82);
        }
    }
}
</style>