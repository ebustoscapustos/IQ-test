<template>
  <div class="result">
    <main-layout>
      <test-result/>
    </main-layout>
  </div>
</template>

<script>
import TestResult from '../components/TestResult.vue'
import MainLayout from '../layouts/MainLayout.vue'
export default {
  name: 'Result',

  components: {
    MainLayout,
    TestResult

  }
}
</script>