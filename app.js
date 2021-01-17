const patient = {
    name: "Vadim",
    weight: 71,
    growth: 174,
    pulse: 90,
    age: 17,
    bottomBlood: 80,
    topBlood: 110,
    sex: "man"
}

indexKetle = (weight, growth) => {
    let index = weight / ((growth/100) * 2)
    return index
}

const a = indexKetle(patient["weight"], patient["growth"])

if(a>18.5 && a < 24.9){
    console.log("Your Index Ketle = ", a , " It`s good")
}
else{
    console.log("Your Index Ketle = ", a , " It`s bad")
}