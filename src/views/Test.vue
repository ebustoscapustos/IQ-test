<template>
    <div class="test">
        <main-layout>
            <test-card v-for="cardData in testData" :key="cardData.id" :cardData="cardData"/>
        </main-layout>
    </div>
</template>

<script>
import TestCard from '../components/TestCard.vue'
import MainLayout from '../layouts/MainLayout.vue'
import {mapGetters} from 'vuex'

export default {
  components: { MainLayout, TestCard },
  computed: {
      ...mapGetters(['testData'])
  }
    
}
</script>

<style lang="scss" scoped>

</style>