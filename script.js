window.addEventListener('load', () => {
    const inp1 = document.querySelector('.input1')
    const inp2 = document.querySelector('.input2')
    const operator = document.querySelector('.operator')
    const equals = document.querySelector('.equals')
    const answer = document.querySelector('.answer')
    const operationMap = {
        '+': (value1, value2) => Number(value1) + Number(value2),
        '-': (value1, value2) => Number(value1) - Number(value2),
        '*': (value1, value2) => Number(value1) * Number(value2),
        '/': (value1, value2) => Number(value1) / Number(value2),
    }
    function onInput(){
        this.value = this.value.replace(/[^0-9.]/g, '');
        equals.disabled = false
    }
    inp1.addEventListener('input', onInput)
    inp2.addEventListener('input', onInput)
    operator.addEventListener('input', () => equals.disabled = false)
    equals.addEventListener('click', () => {
        answer.innerHTML = operationMap[operator.value](inp1.value, inp2.value)
        equals.disabled = true
    })
})