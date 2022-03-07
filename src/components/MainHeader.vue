<template>
  <div class="header">
    <div class="header__menu" @click="switchMenuStatus">
      <svg
        fill="#000000"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 30"
        width="30px"
        height="30px"
      >
        <path
          d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"
        />
      </svg>
    </div>
    <div v-if="testStarted" class="header__title">
      <h1 v-if="!testCompleted">тест на определение IQ</h1>
      <h1 class="complete" v-if="getCounter === 1 && testCompleted">Готово!</h1>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "MainHeader",

  computed: {
    ...mapGetters(['testStarted', 'getCounter', 'testCompleted'])
  },

  methods: {
    ...mapMutations(["switchMenuStatus"]),
  },
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #323232;
  padding: 0 15px;
  position: relative;
  height: 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  

  &__menu {
    width: 30px;
    height: 30px;
    cursor: pointer;
    position: absolute;
    top: 8px;

    svg {
      fill: #696969;
    }
  }

  &__title::before {
    content: "";
    width: 45px;
    height: 45px;
    background-image: url("../assets/images/brain.png");
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    background-size: cover;
    top: 0px;
    left: 50px;
  }

  &__title {
    font-family: "Yeseva One", sans-serif;
    text-transform: uppercase;
    color: #ffc700;

    h1 {
      margin: 0;
      font-weight: normal;
        font-size: 13px;
        vertical-align: middle;
    }

    .complete {
        font-size: 20px;
    }

  }
}

@media (max-width: 450px) {
    .header {

        &__title {
            margin-left: 100px;
        }
    }
}
</style>