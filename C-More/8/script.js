const personer = [
    {
        firstName: "Jeff",
        lastName: "Son"
    },
    {
        firstName: "Joe",
        lastName: "Mama"
    },
    {
        firstName: "Donlad",
        lastName: "Tr0mp"
    }
]


function myFunction(arr){
    return arr.map(function(p){
        return p.firstName + ' ' + p.lastName
    })
}

console.log(myFunction(personer))