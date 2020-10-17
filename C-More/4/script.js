let person1 = {
    age: 28,
    email: "123.mail.com"
}

let person2 = {
    age: 89,
    email: "123.mail.com"
}

function isSameUser(a, b){
    return a.email === b.email
}

console.log(isSameUser(person1, person2))