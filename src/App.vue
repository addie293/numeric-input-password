<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <NumericalPasswordInput :userPassword="userPassword"/>
</template>

<script>
import NumericalPasswordInput from './components/NumericalPasswordInput.vue'

export default {
    name: 'App',
    components: {
        NumericalPasswordInput
    },
    data: () => {
        return {
            userPassword: '012345678'
        }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
