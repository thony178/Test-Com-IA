<template>
  <div class="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
    <footer-component></footer-component>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    FooterComponent
  }
}
</script>

<style>
.app {
  font-family: Arial, sans-serif;
}
</style>
