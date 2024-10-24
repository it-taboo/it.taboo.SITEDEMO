const DialogueClean = [
    {
        q: '*Стук* Извините, можно убраться?',
        t: '(...)',
        a: ['Продолжить'],
        next: [1],
        char: ['MC_poor', 'Sultan_home', 'none'],
        active: ['MC'],
        pp_give: 0,
        loc: 'Двор'
    },
    {
        q: 'Да, сейчас',
        t: '(...)',
        a: ['Продолжить'],
        next: ['Cleaning_return'],
        char: ['MC_poor', 'Sultan_home', 'none'],
        active: ['Sultan'],
        pp_give: 0,
        loc: 'Двор'
    },
    ['Начать диалог']
]

export default DialogueClean