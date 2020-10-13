function isLagom(a){
    if (a.length < 16 && a.length > 8){
        return true
    } else {return false}
}

console.log(isLagom("hejsan svejsan"))