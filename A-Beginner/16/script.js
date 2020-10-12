function checkAge(a){
    if (a >= 65){
        return "old"
    } else if (a < 65) {
        return "young"
    }
}

let age = checkAge(36)
console.log(age)