<template>
    <div class="header">
        <div class="header__menu" @click="switchMenuStatus">
            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px"><path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"/></svg>
        </div>
    </div>
</template>

<script>

import {mapMutations} from 'vuex'
export default {
    name: "MainHeader",

    methods: {
        ...mapMutations([
          'switchMenuStatus'
      ])
    }
}
</script>

<style lang="scss" scoped>
.header {
    background-color: #323232;
    padding: 15px;

    &__menu {
        width: 30px;
        height: 30px;
        cursor: pointer;

        svg {
            fill: #696969;
        }
    }
}
</style>