let daStr = "1111111111111111111"

function isLong(a){
    if(a.length > 18){
        return true
    } else {return false}
}

let result = isLong(daStr)

console.log(result)