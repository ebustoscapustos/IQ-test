<template>
  <div class="menu">
    <div class="menu__header">
      <div class="close-icon" @click="switchMenuStatus">
        <svg
          fill="#000000"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="45px"
          height="45px"
        >
          <path
            d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"
          />
        </svg>
      </div>
    </div>
    <div class="menu__content">
      <ul>
        <router-link :to="{path: '/'}">
          <li @click="transitionHome"><a href="#">Главная</a></li>
        </router-link>
        <router-link :to="{path: '/'}">
          <li @click="transitionHome"><a href="#">Информация о тесте</a></li>
        </router-link>
        <router-link :to="{path: '/test'}">
          <li @click="transitionTest"><a href="#">Пройти тест</a></li>
        </router-link>
      </ul>
    </div>
    <div class="menu__footer"></div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  name: "MainMenu",

  methods: {
      ...mapMutations([
          'switchMenuStatus',
          'switchTestStartedStatus'
      ]),
      transitionTest() {
        this.switchTestStartedStatus(true)
        this.switchMenuStatus()
      },
      transitionHome() {
        this.switchTestStartedStatus(false)
        this.switchMenuStatus()
      }
  }
};
</script>

<style lang="scss" scoped>
.menu {
  font-family: "Roboto", sans-serif;
  background-color: #323232;
  width: 100%;
  z-index: 1;
  min-height: 100vh;

  &__header {
    text-align: right;
    margin: 20px;

    .close-icon {
      svg {
        fill: #ffc700;
      }
    }
  }

  &__content {
    ul {
      list-style-type: none;
      text-align: left;
      padding-left: 15px;
      margin: 0 20px;

      li {
        margin: 30px 0;
      }

      a:active {
        color: #ffc700;
      } 

      a {
        text-decoration: none;
        text-transform: uppercase;
        color: #fff;
        font-weight: 17px;
      }
    }
  }
}
</style>