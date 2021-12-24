<template>
        <button v-if="props.link == '' " button class="jelly-button" @click="props.onClick">
          <slot></slot>
        </button>
        <a v-if="props.link != '' " class="jelly-button" :href="props.link"  v-smooth-scroll>
          <slot></slot>
        </a>
</template>

<script setup>
import {defineProps} from 'vue';

const props = defineProps({
    onClick: {
        type: Function,
        default: ()=>{}
    },
    link: {
        type: String,
        default: ""
    }
})
</script>

<style>
.jelly-button {
  background: #008d8c;
  border: solid 0.2vw #013b3b;
  padding: 1vw 4vw;
  border-radius: 2vw;
  color: #00ff75;
  font-size: 1.2vw;
  cursor: pointer;
  text-decoration: none;
}

@media only screen and (max-width: 600px) {
.jelly-button  {
    background: #008d8c;
    border: solid 0.2vw #013b3b;
    padding: 4vw 10vw;
    border-radius: 30vw;
    color: #00ff75;
    font-size: 6vw;
    cursor: pointer;
  }

}

</style>