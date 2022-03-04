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
            <div class="content__first__more">
                <div class="arrow"></div>
                <a href="#">Подробнее</a>
            </div>
        </div>
        <div class="content__second">
            <p class="content__second__text">Профессиональный IQ-тест позволяет не только определить коэффициент вашего интеллекта, но и выработать список рекомендаций для повышения этого показателя.</p>
        </div>
        <div class="content__third">
            <p class="content__third__text">
                Также по результатам теста <span class="uppercase">вы получите</span> подробные <span class="uppercase">советы</span> по определению наиболее перспективной <span class="uppercase">для вашего типа <span class="lowercase">интеллекта</span> сферы деятельности,</span> которая принесет вам скорейший финансовый результат.
            </p>
            <div class="content__third__image"></div>
            <app-button buttonText="Пройти тест"/>
        </div>
        <div class="wrapper">
            <div class="content__fourth">
                <div class="content__fourth__text">
                    <p>Прохождение теста займет у вас не более <span>12 минут</span>, а его результаты вы сможете <span>использовать всю жизнь.</span></p>
                </div>
                <div class="content__fourth__window">
                    <p class="text">Профессиональная интерпретация и детально <span>проработанные рекомендации</span> позволят вам качественно <span>изменить все аспекты своей жизни:</span> от финансового до любовного.</p>
                </div>
                <app-button buttonText="Пройти тест" :transparency="false"/>
                <div class="content__fourth__copyright">© 2019</div>
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
        position: relative;

        &__header {
            margin-bottom: 250px;

            p {
                font-family: 'PT Serif', sans-serif;
                color: #fff;
                font-size: 18px;
                letter-spacing: 0.05em;
            }

            h1 {
                font-family: 'Yeseva One', sans-serif;
                font-weight: normal;
                font-size: 30px;
                color: #FFC700;
                text-transform: uppercase;
            }
        }

        &__text {
            font-family: 'PT serif', sans-serif;
            font-size: 15px;
            color: #fff;
            margin: 20px;

            .text-one {
                color: #FFC700;
                margin-bottom: 0;
            }

            .text-two {
                margin-top: 0;
            }
        }

        &__more {

            .arrow {
                background-color: #fff;
                background-image: url('../assets/images/icons/arrow_top.svg');
                background-repeat: no-repeat;
                background-position: center;
                width: 16px;
                height: 16px;
                margin: 0 auto;
                border-radius: 50%;
            }

            a {
                font-family: 'PT  serif', sans-serif;
                font-size: 8px;
                color: #fff;
                letter-spacing: 0.05em;
                text-decoration: none;
            }
        }
    }

    &__second {
        background-image: url('../assets/images/second.png');
        background-repeat: no-repeat;
        background-position: center;
        font-size: 18px;
        color: #fff;
        font-family: 'Yeseva One', sans-serif;
        padding: 80px 35px;

        &__text {
            position: relative;
            line-height: 25px;
            letter-spacing: 0.05em;

        }

        &__text::before {
                content: '';
                background-image: url('../assets/images/icons/quotes_top.png');
                background-repeat: no-repeat;
                width: 23px;
                height: 23px;
                position: absolute;
                top: -40px;
                left: -15px;
            }

        &__text::after {
                content: '';
                background-image: url('../assets/images/icons/quotes_bot.png');
                background-repeat: no-repeat;
                width: 23px;
                height: 23px;
                position: absolute;
                bottom: -30px;
                right: -15px;
            }
    }

    &__third {
        padding: 40px 10px;
        font-family: 'PT Serif', sans-serif;
        font-size: 16px;

        &__text {
            letter-spacing: 0.05em;
            line-height: 25px;
            text-align: left;

            .lowercase {
                text-transform: lowercase;
            }

            .uppercase {
                text-transform: uppercase;
                font-weight: bold;
            }
        }

        &__image {
            background-image: url('../assets/images/third.png');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            height: 300px;
            
        }
    }

    .wrapper {
        position: relative;
    }

    &__fourth {
        background-image: url('../assets/images/fourth.jpg');
        background-repeat: no-repeat;
        background-position: center;
        font-family: 'Merriweather', sans-serif;
        font-size: 15px;
        padding: 55px 15px;
        padding-bottom: 15px;

        &__text {
            color: #fff;
            margin-right: 55px;
            text-align: left;
            line-height: 20px;

            span {
                color: #FFC700;
            }
        }

        &__window {
            padding: 30px 15px;
            margin: 30px 0;
            background-color: rgba(255, 255, 255, 1);
            border-radius: 20px;
            line-height: 23px;
            font-size: 16px;
            text-align: left;

            span {
                font-weight: bold;
            }
        }

        &__copyright {
            color: rgba(255, 255, 255, 0.5);
            margin-top: 50px;
        }
    }

    &__fourth::before {
        content: '';
        width: 165px;
        height: 165px;
        background-image: url('../assets/images/lighting.png');
        background-repeat: no-repeat;
        position: absolute;
        background-size: cover;
    }
}
</style>