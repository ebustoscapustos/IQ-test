<template>
  <div class="test-card" v-if="cardData.id === getCounter">
    <progress-bar/>
    <div class="test-card__content">
      <h1 class="question">{{ cardData.title }}</h1>
      <img
        v-if="cardData.image"
        :src="require(`@/assets/images/${cardData.image}`)"
      />
      <ul
        class="options"
        :class="{ 'options-other-style': cardData.otherStyle }"
      >
        <option-item v-for="option in cardData.options"
          :key="option" :option="option" :otherStyle='cardData.otherStyle' :cardId='cardData.id' @select='switchBtnStatus'/>
      </ul>
      <div class="colors-wrap" v-if="cardData.colors">
          <div class="colors">
              <color-item v-for="color in cardData.colors" :key="color" :color='color' :cardId='cardData.id' @select='switchBtnStatus'/>
          </div>
      </div>
    </div>
    <app-button class="test-card__button" buttonText="Далее" :enabled="btnEnabled" @click="next" />
  </div>
</template>

<script>
import AppButton from "./AppButton.vue";
import ColorItem from './ColorItem.vue';
import OptionItem from './OptionItem.vue';
import ProgressBar from './ProgressBar.vue';
import {mapGetters, mapMutations} from 'vuex'
export default {
    data() {
        return {
            btnEnabled: false
        }
    },
  components: { AppButton, OptionItem, ColorItem, ProgressBar },
  props: {
    cardData: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    ...mapGetters(['getCounter',])
  },
 
  methods: {
      ...mapMutations(['updateCounter', 'updateProgress', 'updateScore']),
      next() {
          this.updateProgress()
          this.updateScore(this.cardData.id)
          this.updateCounter()
      },

      switchBtnStatus(value) {
        this.btnEnabled = value
      }
  }
};
</script>

<style lang="scss" scoped>
.test-card {
  font-family: "PT Serif", sans-serif;
  font-size: 18px;
  color: #fff;
  background-image: url("../assets/images/fourth.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: calc(100vh - 45px);
  max-height: calc(100vh - 45px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 0.05em;

  &__content {
    width: 100%;

    .colors-wrap {
        position: relative;
        display: block;
        margin: 0 30px;
    }

    .colors-wrap:after {
        content: "";
        display: block;
        padding-top: 100%;
}

    .colors {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        display: grid;
        grid-gap: 20px;
    }

    .question {
      font-weight: normal;
      font-size: 20px;
    }

    .options {
      list-style-type: none;
      padding: 0;
    }

    .options-other-style {
      display: flex;
      margin: 20px auto;
      justify-content: space-between;
      max-width: 360px;
    }

    img {
      max-width: calc(100% - 125px);
    }
  }

  &__button {
    margin-bottom: 25px;
  }
}

@media (max-width: 400px) {
  .test-card {
    &__content {
      .options-other-style {
          margin: 20px;

        li {
          margin: 0 5px;
        }
      }
    }
  }
}
</style>