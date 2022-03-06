<template>
    <div class="progress-bar">
        <div class="progress-bar__now" :style="{'width':  + getProgress + '%'}"></div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: 'ProgressBar',

    computed: {
        ...mapGetters(['getProgress'])
    }
}
</script>

<style lang="scss" scoped>
.progress-bar {
    height: 10px;
    margin: 15px;
    width: 90%;
    background-color: grey;
    border-radius: 10px;

    &__now {
      height: 100%;
      background-color: #3bde7c;
      border-radius: inherit;
    }
  }
</style>