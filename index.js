const createInput = (options) => {
    const vis = document.querySelector('.submit-button')
    vis.style.visibility = 'visible'
    const form = document.querySelector('.insert')
    form.insertAdjacentHTML('afterbegin', `
    <p>I am ${options.first + 1}, ${options.second + 1}</p>
    <input type="checkbox" class="item-${options.first.toString()+options.second.toString()}">`)
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  

const randomInput = () => {
    if(document.getElementById('random').checked){
        const size = document.getElementById('n').value
        let massive = arrayCreate(true)
        if(size > 5){
            cp_a(massive,size)
            up_a(massive,size)
        }
        else{
            cp_a(massive)
            up_a(massive)
        }
        
    }
}


const arrayCreate = (random) => {
    const int = document.getElementById('n').value

    const size = Number(int)


    if(typeof size  === 'string' || Number.isInteger(size) === false || isNaN(size)){
        alert('Размер матрицы больше или строка , или флоат значение!')
        location.href=href.location
    }


    if(!random){
        if(size > 10){
            alert('Размер матрицы больше 10!')
            location.href=href.location
        }
    }
    if(size === null || size < 2){
        alert('Введенна не правильно раззмерность графа или она меньше 2')
        location.href=href.location
    }
    else{
        let massive = new Array()
    for (let i = 0; i < size; i++) {
        massive[i] = new Array()
        for (let j = 0; j < size; j++) {
            if(random){
                massive[i][j] = getRandomInt(0,1)
            }
            else{
                massive[i][j] = 10
                createInput({
                    first: i,
                    second: j})
            }     
        }
    }
    return massive
    }
}

function collectValues() {
    const size = document.getElementById('n').value
    let checkboxesChecked = new Array(); // можно в массиве их хранить, если нужно использовать 
    for (let i = 0; i < size ; i++) {
        checkboxesChecked[i] = new Array()
        for (let j = 0; j < size; j++) {
            let checkbox = document.querySelector('.item-'+i.toString()+j.toString())
            checkboxesChecked[i][j] = 0

            if (checkbox.checked) {
                checkboxesChecked[i][j] = 1
                checkboxesChecked[j][i] = 1
            }
        }
    }
    return checkboxesChecked // для использования в нужном месте
}

buttonSubmit = document.getElementById('submitButton')

buttonSubmit.addEventListener('click', () => {
    let massive = collectValues()
    cp_a(massive)
    up_a(massive)
})


