const card = $.card(
    [{
            id: 0,
            title: "Уравнение",
            holder: "Введите число",
            fun: value => {
                return value ** 2
            }
        },

        {
            id: 1,
            title: "Пример",
            holder: "Введите пример",
            fun: value => {
                return Math.sqrt(value)
            }
        },

        {
            id: 2,
            title: "Задача",
            holder: "Введите число",
            fun: value => {
                return Math.sqrt(value) + 1
            }
        },
    ]
)