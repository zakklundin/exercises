//om dessa två nedan är lika så ska man få true
let hälsning = "Hejsan"
let hälsningsfras = "Tjena"

function checkString(){
    if (hälsning === hälsningsfras){
        return true
    } else {return false}
}

let result = checkString()

console.log(result)