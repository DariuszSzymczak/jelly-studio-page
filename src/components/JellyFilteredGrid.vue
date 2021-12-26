<template>
<div class="filtered-grid-categories">
    <div v-for="item in categories" class="filtered-grid-category" @click="()=>{props.onClick(item)}"> {{item}} </div>
</div>
</template>


<script setup>
import { defineProps, toRefs } from 'vue';

const props = defineProps({
    categories: Array,
    onClick: Function
})

</script>

<style scoped lang="scss">
.filtered-grid-categories{
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;

}
.filtered-grid-category{
    background-color: #21e581;
    padding: 1.3vw 3.5vw;
    margin: 1.2vw;
    font-size:1.2vw;
    font-weight: bold;
    transition: 0.5s;
    display: inline-block;
    cursor: pointer;
    &:hover, &:active{
         background: #e76610 !important;
    }
}

</style>