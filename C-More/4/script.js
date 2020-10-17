let person1 = {
    age: 28,
    email: "123.mail.com"
}

let person2 = {
    age: 89,
    email: "123.mail.com"
}

function isSameUser(a, b){
    if(a.email === b.email){
        return true
    } else {return false}
}

console.log(isSameUser(person1, person2))