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
    switch (ope) {
        case '+':
            return sum([num1, num2])
            break;
        case '-':
            return sub([num1, num2])
            break;
        case '×':
            return mul([num1, num2])
            break;
        case '÷': 
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


function result() {
    if (ope !== '' && visor.textContent !== '') {
        const num2 = Number(visor.textContent);
        const result = operate(num1, ope, num2);
        const rounded = parseFloat(result.toFixed(8)).toString();

        visor.textContent = rounded;
        num1 = result;
    }
}



let num1 = 0
let num2 = 0
let ope = ''
let shouldClearVisor = false;

const visor = document.querySelector('.visor')

const buttons = document.querySelectorAll('.btn')
buttons.forEach(button => {
    const value = button.textContent
    button.addEventListener('click', () => {
        switch (value) {
            case 'C':
                visor.textContent = '0';
                num1 = 0
                num2 = 0
                ope = ''
                break;
        
            case '.':
                if (!visor.textContent.includes('.')) {
                visor.textContent += '.';
                }
                break;
        
            case '±':
                visor.textContent = (Number(visor.textContent) * -1).toString();
                break;
        
            case '%':
                visor.textContent = (Number(visor.textContent) / 100).toString();
                break;
            
            case 'x²':
                visor.textContent = (Number(visor.textContent)**2).toString();
                break;

            case '+':
                if (visor.textContent === '' || shouldClearVisor) {
                    break;  
                }
                if (ope !== '' && visor.textContent !== '') {
                    result();
                } else {
                    num1 = Number(visor.textContent);
                }
            
                ope = value;
                shouldClearVisor = true;
                break;

            case '×':
                if (ope !== '' && visor.textContent !== '') {
                    result();
                } else {
                    num1 = Number(visor.textContent);
                }
            
                ope = value;
                shouldClearVisor = true;
                break;

            case '-':
                if (ope !== '' && visor.textContent !== '') {
                    result();
                } else {
                    num1 = Number(visor.textContent);
                }
            
                ope = value;
                shouldClearVisor = true;
                break;

            case '÷':
                if (ope !== '' && visor.textContent !== '') {
                    result();
                } else {
                    num1 = Number(visor.textContent);
                }
            
                ope = value;
                shouldClearVisor = true;
                break;

            case '=':
                result();
                ope = '';
                shouldClearVisor = true;
                break;

            default:
                if (!isNaN(value)) {
                    if (visor.textContent === '0' || shouldClearVisor) {
                        visor.textContent = value;
                        shouldClearVisor = false;
                    } else if (visor.textContent.length < 12) {
                        visor.textContent += value;
                    }
                }
                break;
        }
    });
});