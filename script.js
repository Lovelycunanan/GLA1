document.addEventListener('DOMContentLoaded', () => {
    const fullNameHeader = document.createElement('h1');
    fullNameHeader.textContent = 'Lovely Cunanan';
    fullNameHeader.style.textAlign = 'center';
    fullNameHeader.style.color = '#A9A9A9';
    document.body.appendChild(fullNameHeader);

    const inputContainer1 = createInput('Enter number 1:');
    const inputContainer2 = createInput('Enter number 2:');

    const container = document.createElement('div');
    container.style.textAlign = 'center';
    document.body.appendChild(container);

    container.appendChild(inputContainer1);
    container.appendChild(inputContainer2);

    const sumButton = document.createElement('button');
    sumButton.textContent = 'Calculate Sum';
    sumButton.style.display = 'block';
    sumButton.style.margin = '10px auto';
    container.appendChild(sumButton);

    const sumResultContainer = document.createElement('div');
    sumResultContainer.style.textAlign = 'center';
    container.appendChild(sumResultContainer);

    sumButton.addEventListener('click', () => {
        const value1 = parseInt(inputContainer1.querySelector('input').value);
        const value2 = parseInt(inputContainer2.querySelector('input').value);

        validateAndShowSum(value1, value2);
    });

    const validateAndShowSum = (value1, value2) => {
        const validateInput = (inputElement, value) => {
            const existingError = inputElement.parentElement.querySelector('.error-message');

            try {
                if (isNaN(value)) {
                    throw new Error('Please enter a valid number.');
                }

                inputElement.style.border = '';
                if (existingError) {
                    existingError.remove();
                }
            } catch (error) {
                inputElement.style.border = '2px solid red';
                displayErrorMessage(inputElement.parentElement, error.message);
            }
        };

        const displayErrorMessage = (container, message) => {
            const existingError = container.querySelector('.error-message');

            if (existingError) {
                existingError.textContent = message;
            } else {
                const errorParagraph = document.createElement('p');
                errorParagraph.className = 'error-message';
                errorParagraph.style.color = 'red';
                errorParagraph.textContent = message;
                container.appendChild(errorParagraph);
            }
        };

        validateInput(inputContainer1.querySelector('input'), value1);
        validateInput(inputContainer2.querySelector('input'), value2);

        if (!isNaN(value1) && !isNaN(value2)) {
            const sum = value1 + value2;
            const sumResult = document.createElement('p');
            sumResult.textContent = `Sum of ${value1} + ${value2} is ${sum}`;
            sumResultContainer.innerHTML = '';
            sumResultContainer.appendChild(sumResult);
        }
    };

    function createInput(labelText) {
        const inputContainer = document.createElement('div');
        inputContainer.style.margin = '10px';
        inputContainer.style.display = 'inline-block';

        const label = document.createElement('label');
        label.textContent = labelText;

        const input = document.createElement('input');
        input.type = 'text';

        inputContainer.appendChild(label);
        inputContainer.appendChild(input);

        return inputContainer;
    }
});