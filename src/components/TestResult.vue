<template>
  <div class="wrapper">
    <div class="result">
      <div class="wrap">
        <div class="result__block-1">
          <h1>Ваш результат рассчитан:</h1>
          <p>
            <span>Вы относитесь к 3%</span> респондентов, чей уровень интеллекта
            более чем на 15 пунктов отличается от среднего в большую или меньшую
            сторону!
          </p>
        </div>
        <div class="result__block-2">
          <h1>Скорее получите свой результат!</h1>
          <p>
            В целях защиты персональных данных результат теста, их подробная
            интерпретация и рекомендации доступны в виде голосового сообщения по
            звонку с вашего мобильного телефона
          </p>
        </div>
        <div class="result__timer">
          <p>Звоните скорее, запись доступна всего</p>
          <div class="time-wrap">
            <result-timer class="time" />
            <span>минут</span>
          </div>
        </div>
        <div class="result__call" @click="getResult">
          <p>Позвонить и прослушать результат</p>
        </div>
      </div>
      <div class="result__information" v-if="resultShow">
          <ul>
              <li>Вас зовут: {{result.name}}</li>
              <li>Рост: {{result.height}}</li>
              <li>Цвет глаз: {{result.eyeColor}}</li>
              <li>Цвет волос: {{result.hairColor}}</li>
          </ul>
      </div>
      <div class="result__footer">
          TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN
          FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI
      </div>
    </div>
  </div>
</template>

<script>
import ResultTimer from "./ResultTimer.vue";
import {mapGetters} from 'vuex'
export default {
  name: "TestResult",

  data() {
      return {
          result: {
              name: '',
              height: '',
              eyeColor: '',
              hairColor: ''
          },
          resultShow: false
      }
  },

  components: {
    ResultTimer,
  },
  computed: {
      ...mapGetters(['getScore'])
  },
  methods: {
      
      async getResult() {
            const axios = require('axios')
           const result = await axios.get('https://swapi.dev/api/people/' + this.getScore)
           this.result.name = result.data.name
           this.result.height = result.data.height
           this.result.eyeColor = result.data.eye_color
           this.result.hairColor = result.data.hair_color
           this.resultShow = true
      }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  background-image: url("../assets/images/fourth.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: 0;
  overflow: hidden;
}

.result::before {
  content: "";
  width: 165px;
  height: 165px;
  background-image: url("../assets/images/lighting.png");
  background-repeat: no-repeat;
  position: absolute;
  background-size: cover;
  z-index: -1;
  transform: rotate(-53deg);
  right: -115px;
  top: 60%;
}

.result::after {
  content: "";
  width: 165px;
  height: 165px;
  background-image: url("../assets/images/lighting.png");
  background-repeat: no-repeat;
  position: absolute;
  background-size: cover;
  z-index: -1;
  transform: rotate(-53deg);
  left: -75px;
  bottom: 25%;
}

.result {
  min-height: calc(100vh - 45px);
  font-family: "PT serif", sans-serif;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .wrap {
    padding: 0 20px;
  }

  &__block-1 {
    margin: 20px 0;
    margin-top: 30px;

    h1 {
      margin: 0;
      font-size: 18px;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    p {
      font-size: 14px;
      line-height: 18px;
      margin-left: 30px;
      margin-right: 30px;

      span {
        text-decoration: underline;
      }
    }
  }

  &__block-2 {
    h1 {
      color: #3bde7c;
      font-size: 18px;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    p {
      font-family: "Roboto", sans-serif;
      font-size: 8px;
      line-height: 14px;
      border-radius: 6px;
      background-color: #1c2741;
      padding: 15px;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin: 0 20px;
    }
  }

  &__timer {
    font-size: 11px;
    color: #3bde7c;
    letter-spacing: 0.1em;

    .time-wrap {
      display: flex;
      justify-content: center;
      text-align: end;
      align-items: baseline;
    }

    .time {
      font-size: 25px;
      margin: 0 20px;
    }
  }

  &__call {
    padding: 30px;
    border-radius: 6px;
    background-color: #eb1b00;
    position: relative;
    max-width: 400px;
    margin: auto;
    margin-top: 10px;
    cursor: pointer;

    p::before {
      content: "";
      width: 30px;
      height: 30px;
      background-image: url("../assets/images/icons/call.svg");
      background-repeat: no-repeat;
      background-position: center;
      display: block;
      position: absolute;
      left: 15px;
      top: calc(50% - 15px);
    }

    p {
      font-family: "Roboto" sans-serif;
      font-size: 15px;
      font-weight: 900;
      letter-spacing: 0.05em;
      text-align: left;
      margin-left: 30px;
      text-transform: uppercase;
    }
  }

  &__information {
      color: #3bde7c;
      font-family: 'Roboto', sans-serif;
      letter-spacing: 0.1em;
      text-align: left;

      ul {
          padding: 0;
          list-style-type: none;
      }
  }

  &__footer {
      max-height: 20px;
      overflow-y: scroll;
      font-family: 'Roboto', sans-serif;
      font-size: 7px;
      line-height: 150%;
      letter-spacing: 3px;
      color: rgba(255, 255, 255, 0.5);
      padding: 0 20px;
      padding-top: 20px;
      max-width: 300px;
  }

  &__footer::-webkit-scrollbar {
  width: 0;
}
}
</style>