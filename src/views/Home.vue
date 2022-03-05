<template>
  <div class="home">
    <main-layout>
      <main-content/>
    </main-layout>
  </div>
</template>

<script>
import MainContent from '../components/MainContent.vue'
import MainHeader from '../components/MainHeader.vue'
import MainMenu from '../components/MainMenu.vue'
import MainLayout from '../layouts/MainLayout.vue'
// @ is an alias to /src

export default {
  name: 'Home',

  components: { MainLayout, MainHeader, MainMenu, MainContent },

}
</script>


<style lang="scss" scoped>


</style>