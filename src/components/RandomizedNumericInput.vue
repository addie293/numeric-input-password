<template>
    <div class="row text-center mt-2">
        <div class="col-3 mt-2" v-for="(item, index) in numbers" v-bind:key="index">
            <button class="btn btn-outline-dark btn-block" v-on:click="$emit('currentPasswordChange', item)" v-if="item != ''">{{ item }}</button>
            <button class="btn btn-outline-dark btn-block" v-else-if="item == ''">  </button>
        </div>
    </div>
</template>
<script>
export default {
    random_numbers: [],
    name: 'RandomizedNumericInput',
    props: {
        numbers: Array
    }
}
</script>
<style>
    .btn{
        height: 40px; 
    }
</style>