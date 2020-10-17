const knappen = document.getElementById("knappen")

let count = 0

knappen.onclick = räknare

function räknare(){
    count++
    knappen.innerHTML = count
}