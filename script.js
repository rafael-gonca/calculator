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

const colorMap = {
    0: '#E54B4B',      // C
    5: '#716F6F',      // ±
    10: '#716F6F',     // %
    14: '#716F6F',     // x²
    15: '#FF7B47',     // ÷
    16: '#FF7B47',     // ×
    17: '#FF7B47',     // -
    18: '#FF7B47',     // +
    19: '#1985C8'      // =
  };

const btnsContainer = document.querySelector('.buttons-container')
index = 0
for (i = 1; i < 5; i++) {
    const columnBtn = document.createElement('div')
    columnBtn.classList = 'columnBtn'
    btnsContainer.appendChild(columnBtn)
    for (j = 1; j < 6; j++) {
        const btn = document.createElement('button')
        columnBtn.appendChild(btn)
        btn.classList = 'btn'
        contentArray = ['C', '7', '4', '1', '0', '±', '8', '5', '2', '.', '%', '9', '6', '3', 'x²', '÷', '×', '-', '+', '=']
        btn.textContent = contentArray[index]
        if (colorMap[index]) {
            btn.style.backgroundColor = colorMap[index];
          }
        index++
    }
}
