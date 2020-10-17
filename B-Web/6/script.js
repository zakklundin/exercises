setTimeout(function(){document.body.style.backgroundColor = "red"}, 5000)

const räknare = document.getElementById("timer")
let count = 0

setInterval(function() {
    count++
    räknare.innerHTML = count
}, 1000)