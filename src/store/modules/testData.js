export default {
    state: {
        menuIsOpen: false,
        testData: [
            {
                id: 1,
                title: 'Ваш пол:',
                options: ['Мужчина', 'Женщина']
            },

            {
                id: 2,
                title: 'укажите ваш возраст:',
                options: ['до 18', 'от 18 до 28', 'от 29 до 35', 'от 36']
            },

            {
                id: 3,
                title: 'Выберите лишнее:',
                options: ['дом', 'шалаш', 'бунгало', 'скамейка', 'хижина']
            },

            {
                id: 4,
                title: 'Продолжите числовой ряд: 18 20 24 32',
                options: ['62', '48', '74', '57', '60', '77']
            },

            {
                id: 5,
                title: 'Выберите цвет, который сейчас наиболее Вам приятен:',
                colors: ['#A8A8A8', '#0000A9', '#00A701 ', '#F60100', '#FDFF19', '#A95403', '#000000', '#850068', '#46B2AC']
            },

            {
                id: 6,
                title: 'Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:',
                colors: ['#A8A8A8', '#46B2AC', '#A95403', '#00A701', '#000000', '#F60100', '#850068', '#FDFF19', '#0000A9']
            },

            {
                id: 7,
                title: 'Какой из городов лишний?',
                options: ['Вашингтон', 'Лондон', 'Париж', 'Нью-Йорк', 'Москва', 'Оттава']
            },

            {
                id: 8,
                title: 'Выберите правильную фигуру из четырёх пронумерованных.',
                image: 'logic_image_1.png',
                options: ['1', '2', '3', '4'],
                otherStyle: true
            },

            {
                id: 9,
                title: 'Вам привычнее и важнее:',
                options: ['Наслаждаться каждой минутой проведенного времени', 'Быть устремленными мыслями в будущее', 'Учитывать в ежедневной практике прошлый опыт']
            },

            {
                id: 10,
                title: 'Какое определение, по-Вашему, больше подходит к этому геометрическому изображению:',
                image: 'abstract_image.png',
                options: ['оно остроконечное', 'оно устойчиво', 'оно-находится в состоянии равновесия']
            },

            {
                id: 11,
                title: 'Вставьте подходящее число',
                image: 'logic_image_2.png',
                options: ['34', '36', '53', '44','66','42'],
                otherStyle: true
            },
        ]
    },
    mutations: {
        switchMenuStatus(state) {
            state.menuIsOpen = !state.menuIsOpen
        }
    },
    actions: {

    },
    getters: {
        menuIsOpen(state) {
            return state.menuIsOpen
        },
        testData(state) {
            return state.testData
        }
    }
}