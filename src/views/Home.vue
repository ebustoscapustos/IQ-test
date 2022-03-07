<template>
  <div class="home">
    <main-layout>
      <main-content/>
    </main-layout>
  </div>
</template>

<script>
import MainContent from '../components/MainContent.vue'
import MainLayout from '../layouts/MainLayout.vue'

export default {
  name: 'Home',

  components: { MainLayout, MainContent },

}
</script>


<style lang="scss" scoped>


</style>