<template>
  <div class="home">
    <main-layout>
      <main-header @openMenu='menuIsOpen = true'/>

      <main-layout class="layout-menu" v-if="menuIsOpen">
        <main-menu @closedMenu='menuIsOpen = false' />
      </main-layout>

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

  data() {
    return {
      menuIsOpen: false
    }
  },
  components: { MainLayout, MainHeader, MainMenu, MainContent },

}
</script>


<style lang="scss" scoped>
.layout-menu {
  position: absolute;
  top: 0;
  left: 0;
}
</style>