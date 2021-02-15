const insertNumber = (options) => {
    const form = document.querySelector('.insert')
    form.insertAdjacentHTML('afterbegin', `
    <input type="text" placeholder="${options.first + 1} X ${options.second + 1}" data-row="${options.first}" data-column="${options.second}">`)
}


const arrayCreate = (rows, coll, G) => {
    let massive = new Array()
    for (let i = 0; i < rows; i++) {
        massive[i] = new Array()
        for (let j = 0; j < coll; j++) {
            if(G){
                massive[i][j] = getRandomInt(0,1)
            }
            else{
                massive[i][j] = 0
                insertNumber({
                    first: i,
                    second: j})
            }     
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

const manualFunc = () =>{
    element = document.querySelector('.matrix')
    element.style.visibility = 'visible'
}

const manualGen = document.querySelector('[data-manual]')

console.log(manualGen)

manualGen.onclick = function(){manualFunc()}

const autoGen = () => {
    const G = true;
    const row = getRandomInt(1000,10000)
    const column = getRandomInt(1000,10000)
    console.log('Row - ' + row)
    console.log('Column - ' + column)
    findZero(arrayCreate(row, column , G) , row, column)
}

const randomGen = document.querySelector('[data-random]')

randomGen.onclick = function(){autoGen()}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


const el = document.querySelector('[data-massive]')
el.addEventListener('click', listener)

const form = document.querySelector('.confirm-block')
form.insertAdjacentHTML('afterbegin', `<button class="main">Пошук нулів</button>`)

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
    findZero(massive)
}

const findZero = (massive,row, column) => {
    let zero = 0
    let thisDate = (new Date().getTime())%1000
    for (let p = 0; p < massive.length; p++) {
        for (let g = 0; g < massive[p].length; g++) {
            if(massive[p][g] == 0){
                zero++
            }
        }
    }

    let time = (new Date().getTime())%1000 - thisDate
    if(time<0){time = -time}
    if(row){
        document.querySelector('.result').innerHTML = `
        <h2>Матриця розміру ${row}X${column}</h2>
        <p>НУЛІВ - ${zero}</p>
        <p>ЧАС - ${time}ms</p>
        `
    }
    else{
        if(confirm(`
        НУЛІВ - ${zero}
        Час близький до - ${time}ms
        Повторити роботу?
        `)){
            location.href=location.href
        }
    }
    
}


confirmButton.onclick = function(){hello()}
