let colors = ["Röd", "Vit", "Svart", "Blå"]

function virus(a){
a.pop()
a.push("virus")
return a
}

console.log(virus(colors))