<template>
  <div id="main-box">
    <Navbar></Navbar>

    <section id="home-section">
      <img src="../assets/logo-with-lucek.png" id="main-logo" />

      <div class="main-bottom centered-flex">
        <JellyButton link="#author-section">E K S P L O R U J</JellyButton>
        <img src="../assets/feather/chevron-down.svg" id="down-arrow" />
      </div>
      <Medusa :reverse="true" :id="0" :random="1"></Medusa>
      <Medusa :reverse="true" :id="1" :random="2"></Medusa>
      <Medusa :reverse="true" :id="2" :random="3"></Medusa>
      <Medusa :id="3" :random="4"></Medusa>
      <Medusa :id="4" :random="2"></Medusa>
      <Medusa :id="5" :random="1"></Medusa>
    </section>

    <section id="author-section">
      <h1>Autor strony</h1>
      <JellyGrid id="author-box">
        <template v-slot:left-sidebar>
          <h1>Dariusz Szymczak</h1>
          <p>Jestem Front-End developerem z 2 letnim stażem, jednak tworzeniem stron www, aplikacji i grafiki zajmuję się już od dziecka. Moje doświadzcenie obejmuje głównie react i angular, ale moje zamiłowanie do vue sprawiło, że obecnie działam wyłącznie w tej technologii. Szkolę się również w projektowaniu GUI, logo i animacjach SVG.</p>
          <p>
            <b>Jelly studio</b> jest aktualnie otwartym projektem i moim poligonem szkoleniowym. Obok niego rozwijam bibliotekę komponentów
            <b>Jelly-Items</b> oraz system zarządzania treścią stron i sklepów internetowych
            <b>Jelly-Pages</b>. W przyszłości mam nadzieję przekształcić to w prawdziwe studio programistyczne :)
          </p>
        </template>
        <template v-slot:right-sidebar>
          <img src="../assets/dariusz.jpg" id="author-img" />
        </template>
      </JellyGrid>
      <div id="author-links">
        <JellySquare
          icon="linkedin"
          color="#0073b1"
          link="https://www.linkedin.com/in/dariuszszymczak/"
          id="0"
        ></JellySquare>
        <JellySquare icon="github" color="#1a1e22" link="https://github.com/DariuszSzymczak" id="1"></JellySquare>
        <JellySquare icon="mail" color="#63b1ff" link="mailto:dariusz.szymczak96@gmail.com" id="2"></JellySquare>
        <JellySquare text="CV" color="#ea4646" id="3"></JellySquare>
      </div>
    </section>

    <section id="projects-section">
      <Divider height="10vh"></Divider>
      <h1>Projekty</h1>
      <JellyFilteredGrid
        :categories="categories"
        :onClick="filterProjects"
        :active="activeCategory"
      ></JellyFilteredGrid>
      <JellyPortfolioCards :projects="filteredProjects"></JellyPortfolioCards>
    </section>
  </div>
</template>

<script setup>

import Navbar from '../components/Navbar.vue'
import Divider from '../components/Divider.vue';
import Medusa from '../assets/medusa/Medusa.vue';
import { onMounted, ref } from 'vue';
import JellyButton from '../components/JellyButton.vue';
import JellyGrid from "../components/JellyGrid.vue";
import JellySquare from "../components/JellySquare.vue";
import { gsap } from "gsap";
import JellyFilteredGrid from '../components/JellyFilteredGrid.vue';
import JellyPortfolioCards from '../components/JellyPortfolioCards.vue';
import * as Projects from '../assets/projects/doneProjects.json';

const categories = ['www', 'grafika', 'gry', 'inne'];
const filteredProjects = ref([]);
const activeCategory = ref('www');
let moveArrow = gsap.timeline({
  repeat: -1,
  repeatRefresh: true,
  yoyo: true
})

const filterProjects = (category) => {
  activeCategory.value = category;
  let newList = [];
  Projects.data.forEach(item => {
    if (item.category === category) {
      newList.push(item)
    }
  })
  filteredProjects.value = newList;
}

onMounted(() => {
  moveArrow.to('#down-arrow', {
    y: '4vh',
    duration: 2
  })

  filterProjects('www');

})



</script>

<style scoped lang="scss">
section {
  overflow-x: hidden;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8ff;
}

#main-box {
  width: 100vw;
}

.move-box {
  position: absolute;
  overflow-y: visible;
  width: 15vw;
  // height: 30vw;
}

.main-bottom {
  position: relative;
  top: 10vh;
}

#down-arrow {
  width: 3vw;
  filter: invert(92%) sepia(0%) saturate(4022%) hue-rotate(126deg)
    brightness(110%) contrast(106%);
}

#main-logo {
  margin-top: 10vh;
  width: 50%;
  z-index: 7;
}

#home-section {
  background: url("../assets/mainpageBG.jpg");
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
}

// -------------------    page 2

#author-section {
  text-align: center;

  & > h1 {
    margin: 2vw;
  }
}

#author-box {
  width: 70vw;
  margin: auto;
  background-color: white;
  margin: 2vw auto;
  border-radius: 1vw;
  -webkit-box-shadow: 0px 16px 24px -12px rgba(66, 68, 90, 0.5);
  -moz-box-shadow: 0px 16px 24px -12px rgba(66, 68, 90, 0.5);
  box-shadow: 0px 16px 24px -12px rgba(66, 68, 90, 0.5);

  img {
    width: 100%;
    border-radius: 5vw;
    width: 18vw;
  }
}

#author-links {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
}

// mobile
@media only screen and (max-width: 600px) {
  #main-logo {
    margin-top: 30vh;
    width: 90%;
    z-index: 7;
  }

  #down-arrow {
    width: 13vw;
  }

  .move-box {
    position: absolute;
    top: 5vw;
    left: 2vw;
    width: 45vw;
  }

  #author-box {
    width: 90vw;
  }

  #author-section {
    & > h1 {
      margin-top: 20vw;
      margin-bottom: 4vw;
    }
  }
}
</style>
