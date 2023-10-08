let string = '';

buttons.forEach((element) => {
    element.addEventListener('click', (event) => {
        const button = event.target;
        if (button.innerText == '=') {
            string = String(eval(string));
            inputBox.value = string;
        } else if (button.innerText == 'AC') {
            string = '';
            inputBox.value = '0';
        } else if (button.innerText == 'DEL') {
            string = string.substring(0, string.length - 1);
            inputBox.value = string;
        } else if (button.id == 'plusMinus') {
            string = String(-eval(string));
            inputBox.value = string;
        } else {
            if (inputBox.value == '0') {
                inputBox.value = button.innerText;
            } else {
                inputBox.value += button.innerText;
            }
            string += button.innerText;
        }
    });
});