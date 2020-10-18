const names = ["Jeff", "Geoff", "A-A-ron", "MrBeast"]

function hälsning(names){
    console.log("Sup " + names)
}

function allihoppa(element){
    element.forEach(hälsning)
}

allihoppa(names)