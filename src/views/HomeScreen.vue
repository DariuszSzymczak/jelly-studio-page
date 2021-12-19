<template>
  <div id="main-box">
    <Navbar></Navbar>

    <section id="home-section">
      <img src="../assets/logo-with-lucek.png" id="main-logo" />

      <div class="main-bottom centered-flex">
        <button id="explore-button">Eksploruj</button>
        <img src="../assets/feather/chevron-down.svg" id="down-arrow" />
      </div>
    </section>
  </div>
    <Medusa :reverse="true" :id="0" :random="1"></Medusa>
    <Medusa :reverse="true" id="1" random="2"></Medusa>
    <Medusa :reverse="true" id="2" random="3"></Medusa>
    <Medusa  id="3" random="4"></Medusa>
    <Medusa  id="4" random="2"></Medusa>
    <Medusa  id="5" random="1"></Medusa>

</template>

<script setup>

import Navbar from '../components/Navbar.vue'
import Divider from '../components/Divider.vue';
import Medusa from '../assets/medusa/Medusa.vue';
import { onMounted} from 'vue';

let medusesCount = 6;



</script>

<style scoped lang="scss">
.move-box {
  position: absolute;
  top: 5vw;
  left: 2vw;
  width: 15vw;
}

#explore-button {
  background: #008d8c;
  border: solid 0.2vw #013b3b;
  padding: 1vw 4vw;
  border-radius: 2vw;
  color: #00ff75;
  font-size: 1.2vw;
  cursor: pointer;
}

.main-bottom {
  position: absolute;
  bottom: 3vw;
}

#down-arrow {
  width: 3vw;
}

#main-box {
  width: 100vw;
}

#main-logo {
  margin-top: 10vh;
  width: 50%;
  z-index: 7;
}

#home-section {
  overflow-x: hidden;
  width: 100%;
  height: 100vh;
  background: url("../assets/mainpageBG.jpg");
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
