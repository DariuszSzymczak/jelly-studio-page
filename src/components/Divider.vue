<template>
<div class="divider" :style="{'height' : height}"></div>
</template>


<script setup>
import { defineProps, toRefs } from 'vue';

const props = defineProps({
    height: String
})

const { height } = toRefs(props);

</script>

<style scoped>
.divider{
    width: 100%;
}
</style>