const mainSection = document.querySelector('main');
const mcValue = document.getElementById('mc');
const pcsValue = document.getElementById('pcs');
const priceNTVA = document.getElementById('priceNTVA');
// const btnCalculate = document.getElementById('calculate');

const displayResult = document.createElement('p');
mainSection.append(displayResult);

displayResult.innerHTML = 'Cat oare va fi factura?';

document.getElementById("btn-calculate").addEventListener('click', () => {
    displayResult.innerHTML = '';

    let result = mcValue.value * pcsValue.value;
    let previousResult = result * priceNTVA.value;
    let tvaResult = previousResult * 19 / 100;
    let finalResult = tvaResult + previousResult
    displayResult.innerHTML = `${finalResult} RON`;
})

