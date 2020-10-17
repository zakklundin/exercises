let numbers = [5, 12, 8, 9, 17, 16, 4]

function filterOdds(arr){
    return arr.filter(function (num){
        return num % 2 === 0
    })
}

console.log(filterOdds(numbers))