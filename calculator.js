const buttonNum = document.getElementsByName('data-number');
const buttonOp = document.getElementsByName('data-op');
const buttonDelete = document.getElementsByName('data-delete')[0];
const buttonEqual = document.getElementsByName('data-equal')[0];
var result = document.getElementById('result');
var currentOp = '';
var previousOp = '';
var operation = undefined;

buttonNum.forEach(function(button)
{
    button.addEventListener('click', function()
    {
        addNumber(button.innerText);
    })
});


buttonOp.forEach(function(button)
{
    button.addEventListener('click', function()
    {
        selectOp(button.innerText);
    })
});

buttonEqual.addEventListener('click', function()
{
    calculate();
    refreshDisplay();
})

buttonDelete.addEventListener('click', function()
{
    clear();
    refreshDisplay();
})

function addNumber(num)
{
    currentOp = currentOp.toString() + num.toString();
    refreshDisplay();
}

function selectOp(op)
{
    if(currentOp == '') return;
    if(previousOp !== '')
    {
        calculate();
    }
    operation = op.toString();
    previousOp = currentOp;
    currentOp = '';
    refreshDisplay();
}

function calculate()
{
    const previous = parseFloat(previousOp);
    const current = parseFloat(currentOp);
    var calculation;

    if(isNaN(previous) || isNaN(current)) return;
    switch(operation)
    {
        case '+':
            calculation = previous + current;
            break;
        case '-':
            calculation = previous - current;
            break;
        case 'x':
            calculation = Math.fround(previous * current);
            break;
        case '/':
            calculation = Math.fround(previous / current);
             break;
        default: return;
    } 
    currentOp = calculation;
    previousOp = '';
    operation = undefined;
}

function clear()
{
    currentOp = '';
    previousOp = '';
    operation = undefined;
}

function refreshDisplay()
{
    result.value = currentOp;
}