<template>
    <div class="test">
        <main-layout>
            <test-card v-for="cardData in testData" :key="cardData.id" :cardData="cardData"/>
            <result-loading/>
        </main-layout>
    </div>
</template>

<script>
import TestCard from '../components/TestCard.vue'
import MainLayout from '../layouts/MainLayout.vue'
import {mapGetters} from 'vuex'
import ResultLoading from '../components/ResultLoading.vue'

export default {
  components: { MainLayout, TestCard, ResultLoading },
  computed: {
      ...mapGetters(['testData'])
  }
    
}
</script>

<style lang="scss" scoped>

</style>