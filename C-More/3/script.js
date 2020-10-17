let person1 = {
    name: "Gary",
    age: 25,
    town: "Köping"
}

let person2 = {
    name: "Lary",
    age: 25,
    town: "Jönköping"
}

function isSameAge(a, b){
    if(a.age === b.age){
        return true
    } else { return false}
}

console.log(isSameAge(person1, person2))