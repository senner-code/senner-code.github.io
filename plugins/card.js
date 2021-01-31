function _createCard(options) {
    const readyCard = options.map(el => {
        const card = document.createElement('div')
        card.classList.add('card')
        card.id = el.id
        card.insertAdjacentHTML('afterbegin', `
        <h2>${el.title}</h2>
        <p>Ответ: <strong></strong></p>
        <input type="text" placeholder="${el.holder}">
        <button type="submit" class="btn btn-primary" data-send="true">Подтвердить</button>
    `)
        const form = document.querySelector('.card-section')
        form.appendChild(card)
        return card
    })
    return readyCard
}



$.card = options => {
    const $card = _createCard(options)

    $card.forEach(element => {
        const listener = (event) => {
            if (event.target.dataset.send) {
                const value = element.querySelector('input').value
                element.querySelector("strong").innerHTML = options[element.id].fun(value) || ''
            }
        }
        let el = element.querySelector('button')
        el.addEventListener('click', listener)
    });

}