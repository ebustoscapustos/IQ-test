<template>
    <div class="content">
        <div class="content__first">
            <div class="content__first__header">
                <p>Пройдите точный и быстрый</p>
                <h1>Тест на <br>определение <br>IQ</h1>
            </div>
            <app-button buttonText="Пройти тест"/>
            <div class="content__first__text">
                <p class="text-one">И получите рекомендации по развитию своего интеллекта</p>
                <p class="text-two">и улучшению финансового благосостояния и личной жизни</p>
            </div>
        </div>
    </div>
</template>

<script>
import AppButton from './AppButton.vue'
export default {
  components: { AppButton },
    name: "MainContent",
}
</script>

<style lang="scss" scoped>
.content {

    &__first {
        padding: 30px;
        background-image: url("../assets/images/first.jpg");
        background-repeat: no-repeat;
        background-position-x: center;
        background-position-y: -90px;
        height: 500px;

        &__header {
            margin-bottom: 250px;

            p {
                font-family: 'PT Serif', sans-serif;
                color: #fff;
                font-size: 18px;
                letter-spacing: 0.05em;
            }

            h1 {
                font-size: 30px;
                color: #FFC700;
                text-transform: uppercase;
            }
        }
    }
}
</style>