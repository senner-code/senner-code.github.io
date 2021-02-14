const insertNumber = (options) => {
    const form = document.querySelector('.insert')
    form.insertAdjacentHTML('afterbegin', `
    <input type="text" placeholder="${options.first + 1} X ${options.second + 1}" data-row="${options.first}" data-column="${options.second}">`)
}

const arrayCreate = (rows, coll) => {
    let massive = new Array()
    for (let i = 0; i < rows; i++) {
        massive[i] = new Array()
        for (let j = 0; j < coll; j++) {
            massive[i][j] =0
            insertNumber({
                first: i,
                second: j
            })
        }
    }
    return massive
}

const listener = (event) => {
    if (event.target.dataset.massive) {
        let nm = document.querySelectorAll('.nm')
        arrayCreate(nm[0].value, nm[1].value)
    }
}


const el = document.querySelector('[data-massive]')
el.addEventListener('click', listener)

const form = document.querySelector('.confirm-block')
form.insertAdjacentHTML('afterbegin', `<button class="main">Поиск нулей</button>`)

const confirmButton = document.querySelector('.main')

const hello = () => {
    let td = document.querySelectorAll('[data-row]')
    let nm = document.querySelectorAll('.nm')
    let massive = new Array()
    indexx = 0
    for (let i = 0; i < nm[0].value; i++) {
        massive[i] = new Array()
        for (let j = 0; j < nm[1].value; j++) {
            massive[i][j] = td[indexx].value
            indexx++
        }
    }
    let zero = 0
    for (let p = 0; p < massive.length; p++) {
        for (let g = 0; g < massive[p].length; g++) {
            console.log(massive[p][g])
            if(massive[p][g] == 0){
                zero++
            }
        }
    }    
    alert("НУЛЕЙ - "+ zero)
}


confirmButton.onclick = function(){hello()}