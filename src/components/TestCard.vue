<template>
  <div class="test-card">
    <div class="progress-bar">
      <div class="progress-bar__now"></div>
    </div>
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
        <li
          class="options__item"
          v-for="option in cardData.options"
          :key="option"
        >
          <p>{{ option }}</p>
        </li>
      </ul>
      <div class="colors-wrap" v-if="cardData.colors">
          <div class="colors">
              <div class="item" v-for="color in cardData.colors" :key="color" :style="{background: color}"></div>
          </div>
      </div>
    </div>
    <app-button class="test-card__button" buttonText="Далее" :enabled="btnEnabled" @click="next" />
  </div>
</template>

<script>
import AppButton from "./AppButton.vue";
export default {
    data() {
        return {
            btnEnabled: false
        }
    },
  components: { AppButton },
  props: {
    cardData: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
      next() {
          console.log('next')
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
  background-position: center;
  background-repeat: no-repeat;
  min-height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 0.05em;

  .progress-bar {
    height: 10px;
    margin: 15px;
    width: 90%;
    background-color: grey;
    border-radius: 10px;

    &__now {
      height: 100%;
      background-color: #3bde7c;
      width: 20%;
      border-radius: inherit;
    }
  }

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

        .item {
            width: 100%;
            height: 100%;
        }
    }

    .question {
      font-weight: normal;
      font-size: 20px;
    }

    .options {
      list-style-type: none;
      padding: 0;

      &__item {
        background-color: rgba(255, 255, 255, 0.3);
        margin: 10px 0;
        padding: 15px 0;
        text-align: left;
        position: relative;
        cursor: pointer;

        p {
          margin: 0;
          margin-left: 95px;
          margin-right: 10px;
        }

        p::before {
          content: "";
          width: 20px;
          height: 20px;
          border: 1px solid #fff;
          border-radius: 50%;
          position: absolute;
          left: 35px;
          top: calc(50% - 10px);
        }
      }

      &__item:active {
          background-color: #3bde7c;
      }
    }

    .options-other-style {
      display: flex;
      margin: 20px auto;
      justify-content: space-between;
      max-width: 360px;

      li {
        width: 41px;
        height: 41px;
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        color: #000;
      }

      p {
        margin: 0;
      }

      p::before {
        content: none;
      }
    }

    img {
      max-width: calc(100% - 90px);
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