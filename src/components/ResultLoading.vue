<template>
  <div class="loading" v-if="getCounter > 11">
    <progress-bar />
    <h1>Обработка <br />результатов</h1>
    <div id="cssload-loader">
      <div class="cssload-dot"></div>
      <div class="cssload-dot"></div>
      <div class="cssload-dot"></div>
      <div class="cssload-dot"></div>
      <div class="cssload-dot"></div>
      <div class="cssload-dot"></div>
      <div class="cssload-dot"></div>
      <div class="cssload-dot"></div>
    </div>
    <div class="load">
      <p>Определение стиля мышления{{ load }}</p>
    </div>
  </div>
</template>

<script>
import ProgressBar from "./ProgressBar.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "ResultLoading",

  data() {
    return {
      load: ".",
    };
  },
  components: { ProgressBar },
  computed: {
    ...mapGetters(["getCounter", "getCounter"]),
  },
  methods: {
	  ...mapMutations(['updateCounter', 'switchTestCompletedStatus'])
  },
  watch: {
    getCounter(value) {
      if (value === 12) {
        setInterval(() => {
          if (this.load.length > 500) this.load = ".";
          this.load += " .";
        }, 20);
        const timeLoading = 2000 + Math.random * 5000;

        setTimeout(() => {
			this.$router.push('/result')
          	this.updateCounter()
			this.switchTestCompletedStatus(true)
        }, 3000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.loading {
  background-image: url("../assets/images/fourth.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  font-family: "PT Serif", sans-serif;
  font-size: 14px;
  color: #fff;
  min-height: calc(100vh - 45px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 23px;
    font-weight: normal;
    margin-top: 50px;
    margin-bottom: 30px;
  }

  .load {
    width: 100%;
  }
  p {
    height: 300px;
    margin: 30px;
    text-align: left;
  }
}

#cssload-loader {
  position: relative;
  width: 70px;
  height: 70px;
  margin: auto;
}
#cssload-loader .cssload-dot {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 35px;
  height: 100%;
  margin: auto;
}
#cssload-loader .cssload-dot:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  transform: scale(0);
  -o-transform: scale(0);
  -ms-transform: scale(0);
  -webkit-transform: scale(0);
  -moz-transform: scale(0);
}
#cssload-loader .cssload-dot:nth-child(7n + 1) {
  transform: rotate(45deg);
  -o-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
}
#cssload-loader .cssload-dot:nth-child(7n + 1):before {
  background: #3bde7c;
  animation: cssload-load 0.92s linear 0.12s infinite;
  -o-animation: cssload-load 0.92s linear 0.12s infinite;
  -ms-animation: cssload-load 0.92s linear 0.12s infinite;
  -webkit-animation: cssload-load 0.92s linear 0.12s infinite;
  -moz-animation: cssload-load 0.92s linear 0.12s infinite;
}
#cssload-loader .cssload-dot:nth-child(7n + 2) {
  transform: rotate(90deg);
  -o-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
}
#cssload-loader .cssload-dot:nth-child(7n + 2):before {
  background: #3bde7c;
  animation: cssload-load 0.92s linear 0.23s infinite;
  -o-animation: cssload-load 0.92s linear 0.23s infinite;
  -ms-animation: cssload-load 0.92s linear 0.23s infinite;
  -webkit-animation: cssload-load 0.92s linear 0.23s infinite;
  -moz-animation: cssload-load 0.92s linear 0.23s infinite;
}
#cssload-loader .cssload-dot:nth-child(7n + 3) {
  transform: rotate(135deg);
  -o-transform: rotate(135deg);
  -ms-transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
}
#cssload-loader .cssload-dot:nth-child(7n + 3):before {
  background: #3bde7c;
  animation: cssload-load 0.92s linear 0.35s infinite;
  -o-animation: cssload-load 0.92s linear 0.35s infinite;
  -ms-animation: cssload-load 0.92s linear 0.35s infinite;
  -webkit-animation: cssload-load 0.92s linear 0.35s infinite;
  -moz-animation: cssload-load 0.92s linear 0.35s infinite;
}
#cssload-loader .cssload-dot:nth-child(7n + 4) {
  transform: rotate(180deg);
  -o-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
}
#cssload-loader .cssload-dot:nth-child(7n + 4):before {
  background: #3bde7c;
  animation: cssload-load 0.92s linear 0.46s infinite;
  -o-animation: cssload-load 0.92s linear 0.46s infinite;
  -ms-animation: cssload-load 0.92s linear 0.46s infinite;
  -webkit-animation: cssload-load 0.92s linear 0.46s infinite;
  -moz-animation: cssload-load 0.92s linear 0.46s infinite;
}
#cssload-loader .cssload-dot:nth-child(7n + 5) {
  transform: rotate(225deg);
  -o-transform: rotate(225deg);
  -ms-transform: rotate(225deg);
  -webkit-transform: rotate(225deg);
  -moz-transform: rotate(225deg);
}
#cssload-loader .cssload-dot:nth-child(7n + 5):before {
  background: #3bde7c;
  animation: cssload-load 0.92s linear 0.58s infinite;
  -o-animation: cssload-load 0.92s linear 0.58s infinite;
  -ms-animation: cssload-load 0.92s linear 0.58s infinite;
  -webkit-animation: cssload-load 0.92s linear 0.58s infinite;
  -moz-animation: cssload-load 0.92s linear 0.58s infinite;
}
#cssload-loader .cssload-dot:nth-child(7n + 6) {
  transform: rotate(270deg);
  -o-transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  -webkit-transform: rotate(270deg);
  -moz-transform: rotate(270deg);
}
#cssload-loader .cssload-dot:nth-child(7n + 6):before {
  background: #3bde7c;
  animation: cssload-load 0.92s linear 0.69s infinite;
  -o-animation: cssload-load 0.92s linear 0.69s infinite;
  -ms-animation: cssload-load 0.92s linear 0.69s infinite;
  -webkit-animation: cssload-load 0.92s linear 0.69s infinite;
  -moz-animation: cssload-load 0.92s linear 0.69s infinite;
}
#cssload-loader .cssload-dot:nth-child(7n + 7) {
  transform: rotate(315deg);
}
#cssload-loader .cssload-dot:nth-child(7n + 7):before {
  background: #3bde7c;
  animation: cssload-load 0.92s linear 0.81s infinite;
  -o-animation: cssload-load 0.92s linear 0.81s infinite;
  -ms-animation: cssload-load 0.92s linear 0.81s infinite;
  -webkit-animation: cssload-load 0.92s linear 0.81s infinite;
  -moz-animation: cssload-load 0.92s linear 0.81s infinite;
}
#cssload-loader .cssload-dot:nth-child(7n + 8) {
  transform: rotate(360deg);
  -o-transform: rotate(360deg);
  -ms-transform: rotate(360deg);
  -webkit-transform: rotate(360deg);
  -moz-transform: rotate(360deg);
}
#cssload-loader .cssload-dot:nth-child(7n + 8):before {
  background: #3bde7c;
  animation: cssload-load 0.92s linear 0.92s infinite;
  -o-animation: cssload-load 0.92s linear 0.92s infinite;
  -ms-animation: cssload-load 0.92s linear 0.92s infinite;
  -webkit-animation: cssload-load 0.92s linear 0.92s infinite;
  -moz-animation: cssload-load 0.92s linear 0.92s infinite;
}

@keyframes cssload-load {
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>