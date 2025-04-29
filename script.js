function sum(arr) {
    let sum = arr.reduce((total, alg) => total + alg, 0)
    return sum
}

function sub(arr) {
    let sub = arr.reduce((total, alg) => total - alg)
    return sub
}

function mul(arr) {
    let mul = arr.reduce((total, alg) => total * alg)
    return mul
}

function div(arr) {
    let div = arr.reduce((total, alg) => total / alg)
    return div
}

function operate(num1, ope, num2) {
    if (ope === '+') {
        return sum([num1, num2])
    } else if (ope === '-') {
        return sub([num1, num2])
    } else if (ope === '*') {
        return mul([num1, num2])
    } else if (ope === '/') {
        return div([num1, num2])
    }
}

console.log(operate(3, '*', 3))
