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

logger.keyAndValues.call(person)





const a = document.getElementById("hello")

a.textContent = logger.keyAndValues.call(person)