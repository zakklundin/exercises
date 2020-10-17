let userInput = prompt("Write Password")

while(userInput !== "Password"){
    userInput = prompt("Try Again")
}

if(userInput === "Password"){
    alert("grattis")
}