// forms and sections
const form = document.querySelector('#form') as HTMLFormElement
const btnThanks = document.getElementById('complete-section') as HTMLButtonElement
const completeSection = document.getElementById('complete-section') as any

//inputs
const inputs = document.querySelectorAll('input') as any
const cardName = document.querySelector('#cardName')
const cardNumber = document.querySelector('#cardNumber')
const mes = document.querySelector('#cardMonth') 
const ano = document.querySelector('#cardYear')
const cvc = document.querySelector('#cvc')

//front card display
const frontCardName = document.getElementById('front-cardName') as HTMLElement
const frontCardNumber = document.getElementById('cardNumberRef') as HTMLElement
const backCardCvc = document.getElementById('cvcBackCard') as HTMLElement
const frontCardYear = document.getElementById('front-card-year') as HTMLElement
const frontCardMonth = document.getElementById('front-card-month') as HTMLElement


inputs.forEach((element: HTMLInputElement) => {
    element.addEventListener('keyup', () => {
        if (element === cardName) {
            frontCardName.innerHTML = element.value;
        } else if (element === cardNumber) {
            frontCardNumber.innerHTML = element.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();;
        } else if (element === cvc) {
            backCardCvc.innerHTML = element.value;
        } else if (element === ano) {
            frontCardYear.innerHTML = element.value;
        } else if (element === mes) {
            frontCardMonth.innerHTML = element.value;
        }
    })
});

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    completeSection.classList.remove('hide');
    form.classList.add('hide');
})
btnThanks.addEventListener('click', (e: Event) => {
    e.preventDefault()
    completeSection.classList.add('hide')
    form.classList.remove('hide')
    window.location.reload();
})
export { }
