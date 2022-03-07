<template>
  <div class="main-layout">
    <div class="content">
      <div class="wrapper">
        <main-header/>
        <main-menu class="menu" v-if="menuIsOpen"/>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import MainHeader from '../components/MainHeader.vue';
import MainMenu from '../components/MainMenu.vue';
import { mapGetters } from "vuex";

export default {
  components: { MainHeader, MainMenu },
  name: "MainLayout",
  computed: {
    ...mapGetters([
     'menuIsOpen',
    ])
  }
};
</script>

<style lang="scss" scoped>
.main-layout {
  text-align: center;
  width: 100%;
  background-image: url('../assets/images/layout.jpg');
  background-position: center;
  background-size: cover;
}
.content {
  padding: 0 calc(50% - 295px);
  
}
.wrapper {
  position: relative;
}
.menu {
  position: absolute;
  top: 0;
  left: 0;
}
</style>