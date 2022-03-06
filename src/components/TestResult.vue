<template>
    <div class="result">
        <div class="result__block-1">
            <h1>Ваш результат рассчитан:</h1>
            <p>вы относитесь к 3% респондентов, чей уровень интеллекта более чем на 15 пунктов отличается от среднего в большую или меньшую сторону!</p>
        </div>
        <div class="result__block-2">
            <h1>Скорее получите свой результат!</h1>
            <p>В целях защиты персональных данных результат теста, их подробная интерпретация и рекомендации доступны в виде голосового сообщения по звонку с вашего мобильного телефона</p>
        </div>
        <result-timer/>
        <div class="result__call">
            <p>Позвонить и прослушать результат</p>
        </div>
        <div class="result__header">
            <p>TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI</p>
        </div>
    </div>
</template>

<script>
import ResultTimer from './ResultTimer.vue'
export default {
    name: 'TestResult',

    components: {
        ResultTimer

    }
}
</script>