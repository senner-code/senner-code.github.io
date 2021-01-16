const person = {
    name:"Senner",
    age: 17,
    isProgrammer: true,
    l: ["ru", "en", "de"],
    hello(){
        console.log("hello world")
    }
}
const logger = {
    keys() {
        console.log("Object Keys: ", Object.keys(this))
    },

    keyAndValues() {
        Object.keys(this).forEach((key) => {
            console.log(key ,":", this[key])
        })
    }

}

arrays = ("Object Keys: ", Object.keys(person))

console.log(arrays)

const a = document.getElementById("hello")

arrays.forEach((text, i , arrays) => {
    setTimeout(()=>{
        a.textContent = i
    }, 10000)
    console.log(i)
})
