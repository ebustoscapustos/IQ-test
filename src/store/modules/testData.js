export default {
    state: {
        menuIsOpen: false,
        testData: [
            {
                id: 1,
                title: 'Ваш пол:',
                options: [
                    {
                        text: 'Мужчина',
                        selected: false,
                        value: 1
                    },
                    {
                        text: 'Женщина',
                        selected: false,
                        value: 1
                    }
                ]
            },

            {
                id: 2,
                title: 'укажите ваш возраст:',
                options: [
                    {
                        text: 'до 18',
                        selected: false,
                        value: 1
                    },
                    {
                        text: 'от 18 до 28',
                        selected: false,
                        value: 1
                    },
                    {
                        text: 'от 29 до 35',
                        selected: false,
                        value: 1
                    },
                    {
                        text: 'от 36',
                        selected: false,
                        value: 1
                    }
                ]
            },

            {
                id: 3,
                title: 'Выберите лишнее:',
                options: [
                    {
                        text: 'дом',
                        selected: false,
                        value: 1
                    },
                    {
                        text: 'шалаш',
                        selected: false,
                        value: 1
                    },
                    {
                        text: 'бунгало',
                        selected: false,
                        value: 1
                    },
                    {
                        text: 'скамейка',
                        selected: false,
                        value: 1
                    },
                    {
                        text: 'хижина',
                        selected: false,
                        value: 1
                    }
                ]
            },

            {
                id: 4,
                title: 'Продолжите числовой ряд: 18 20 24 32',
                options: [
                    {
                        text: '62',
                        selected: false,
                        value: 1
                    },
                    {
                        text: '48',
                        selected: false,
                        value: 1
                    },
                    {
                        text: '74',
                        selected: false,
                        value: 1
                    },
                    {
                        text: '57',
                        selected: false,
                        value: 1
                    },
                    {
                        text: '60',
                        selected: false,
                        value: 1
                    },
                    {
                        text: '77',
                        selected: false,
                        value: 1
                    }
                ]
            },

            {
                id: 5,
                title: 'Выберите цвет, который сейчас наиболее Вам приятен:',
                colors: [
                    {
                        color: '#A8A8A8',
                        selected: false,
                        value: 1
                    },
                    {
                        color: '#0000A9',
                        selected: false,
                        value: 1
                    },
                    {
                        color: '#00A701',
                        selected: false,
                        value: 1
                    },
                    {
                        color: '#F60100',
                        selected: false,
                        value: 1
                    },
                    {
                        color: '#FDFF19',
                        selected: false,
                        value: 1
                    },
                    {
                        color: '#A95403',
                        selected: false,
                        value: 1
                    },
                    {
                        color: '#000000',
                        selected: false,
                        value: 1
                    },
                    {
                        color: '#850068',
                        selected: false,
                        value: 1
                    },
                    {
                        color: '#46B2AC',
                        selected: false,
                        value: 1
                    }
                ]
            },

            {
                id: 6,
                title: 'Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:',
                colors: [
                    {
                        color: '#A8A8A8',
                        selected: false,
                        value: 1
                    },
                    {
                        color: '#46B2AC',
                        selected: false,
                        value: 1
                    },
                    {
                        color: '#A95403',
                        selected: false,
                        value: 1
                    },
                    {
                        color: '#00A701',
                        selected: false,
                        value: 1
                    },
                    {
                        color: '#000000',
                        selected: false,
                        value: 1
                    },
                    {
                        color: '#F60100',
                        selected: false,
                        value: 1
                    },
                    {
                        color: '#850068',
                        selected: false,
                        value: 1
                    },
                    {
                        color: '#FDFF19',
                        selected: false,
                        value: 1
                    },
                    {
                        color: '#0000A9',
                        selected: false,
                        value: 1
                    }
                ]
            },

            {
                id: 7,
                title: 'Какой из городов лишний?',
                options: [
                    {
                        text: 'Вашингтон',
                        selected: false,
                        value: 1
                    },
                    {
                        text: 'Лондон',
                        selected: false,
                        value: 1
                    },
                    {
                        text: 'Париж',
                        selected: false,
                        value: 1
                    },
                    {
                        text: 'Нью-Йорк',
                        selected: false,
                        value: 1
                    },
                    {
                        text: 'Москва',
                        selected: false,
                        value: 1
                    },
                    {
                        text: 'Оттава',
                        selected: false,
                        value: 1
                    }
                ]
            },

            {
                id: 8,
                title: 'Выберите правильную фигуру из четырёх пронумерованных.',
                image: 'logic_image_1.png',
                options: [
                    {
                        text: '1',
                        selected: false,
                        value: 1
                    },
                    {
                        text: '2',
                        selected: false,
                        value: 1
                    },
                    {
                        text: '3',
                        selected: false,
                        value: 1
                    },
                    {
                        text: '4',
                        selected: false,
                        value: 1
                    }
                ],
                otherStyle: true
            },

            {
                id: 9,
                title: 'Вам привычнее и важнее:',
                options: [
                    {
                        text: 'Наслаждаться каждой минутой проведенного времени',
                        selected: false,
                        value: 1
                    },
                    {
                        text: 'Быть устремленными мыслями в будущее',
                        selected: false,
                        value: 1
                    },
                    {
                        text: 'Учитывать в ежедневной практике прошлый опыт',
                        selected: false,
                        value: 1
                    }
                ]
            },

            {
                id: 10,
                title: 'Какое определение, по-Вашему, больше подходит к этому геометрическому изображению:',
                image: 'abstract_image.png',
                options: [
                    {
                        text: 'оно остроконечное',
                        selected: false,
                        value: 1
                    },
                    {
                        text: 'оно устойчиво',
                        selected: false,
                        value: 1
                    },
                    {
                        text: 'оно-находится в состоянии равновесия',
                        selected: false,
                        value: 1
                    }
                ]
            },

            {
                id: 11,
                title: 'Вставьте подходящее число',
                image: 'logic_image_2.png',
                options: [
                    {
                        text: '34',
                        selected: false,
                        value: 1
                    },
                    {
                        text: '36',
                        selected: false,
                        value: 1
                    },
                    {
                        text: '53',
                        selected: false,
                        value: 1
                    },
                    {
                        text: '44',
                        selected: false,
                        value: 1
                    },
                    {
                        text: '66',
                        selected: false,
                        value: 1
                    },
                    {
                        text: '42',
                        selected: false,
                        value: 1
                    }
                ],
                otherStyle: true
            },
        ],

        counter: 1,
        progress: 0
    },
    mutations: {
        updateProgress(state) {
            state.progress = 100 / 11 * state.counter
        },
        switchMenuStatus(state) {
            state.menuIsOpen = !state.menuIsOpen
        },
        switchSelected(state, payload) {
            state.testData[payload.cardId - 1].options.forEach(item => {
                if (item.selected && item.text !== payload.selectedOption.text) {
                    item.selected = false
                }
            })
            state.testData[payload.cardId - 1].options.forEach(item => {
                if (item.text === payload.selectedOption.text) {
                    item.selected = !item.selected
                }
            });

        },
        switchSelectedColor(state, payload) {
            state.testData[payload.cardId - 1].colors.forEach(item => {
                if (item.selected && item.color !== payload.selectedOption.color) {
                    item.selected = false
                }
            })

            if (state.testData[payload.cardId - 1].colors) {
                state.testData[payload.cardId - 1].colors.forEach(item => {
                    if (item.color === payload.selectedOption.color) {
                        item.selected = !item.selected
                    }
                })
            }
        },
        updateCounter(state) {
            state.counter = state.counter + 1
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
        },
        getCounter(state) {
            return state.counter
        },
        getProgress(state) {
           return state.progress
        }
    }
}