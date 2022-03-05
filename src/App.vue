<template>
  <router-view></router-view>
</template>

<script>
import Home from './views/Home.vue'
export default {
  components: { Home },
  
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&family=PT+Serif:wght@400;700&family=Roboto:wght@100;300;400;500;700&family=Yeseva+One&display=swap');

body {
  margin: 0;
}
</style>
