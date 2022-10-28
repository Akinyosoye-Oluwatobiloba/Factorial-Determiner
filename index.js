
//factorial

function  factorial(n){
    let fact = 1 ;

    for(i=2;i<=n;i++){
    fact = fact * i;
    }
    return fact;
}
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));
console.log(factorial(8));
console.log(factorial(9));
console.log(factorial(2));