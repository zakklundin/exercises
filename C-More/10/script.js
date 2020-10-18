function makePerson(firstName, lastName){
    return {
        firstName: firstName,
        lastName: lastName,
        isHuman: true
    }
}

const person = makePerson("Abe", "Linc")

console.log(person)