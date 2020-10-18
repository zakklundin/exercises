function doTwice(funktion){
    funktion()
    funktion()
}

function logga(){
    console.log("Om detta fungerar ska detta loggas två gånger tror jag")
}

function fungerade(){
    console.log("Perfekt")
}

doTwice(logga)
doTwice(fungerade)