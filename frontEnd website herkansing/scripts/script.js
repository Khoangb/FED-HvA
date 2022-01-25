let buttonReset = document.getElementById('reset');
let inputs = document.querySelectorAll('input');

buttonReset.addEventListener('click', () => {
    inputs.forEach(input =>  input.value = '');
});