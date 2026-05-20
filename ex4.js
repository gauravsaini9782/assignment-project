// Convert text into list of numbers
function parseNumbers(text) {

    return text
        .trim()
        .split(/\s+/)
        .map(Number)
        .filter(num => !isNaN(num));
}


// Main calculation function
function calculateResult(input) {

    const [factorText = '', multipleText = ''] = input.split(':');

    const factors = parseNumbers(factorText);

    const multiples = parseNumbers(multipleText);


    const result = multiples
        .filter(value =>

            factors.some(
                factor =>
                    factor !== 0 &&
                    value % factor === 0
            )

        )
        .reduce((sum, value) => sum + value, 0);


    return `${result} : ${factors.join(' ')} : ${multiples.join(' ')}`;
}


// Button function
function runCalculation() {

    const input =
        document.getElementById('inputText').value;

    const result =
        calculateResult(input);

    document.getElementById('output4').textContent =
        result;
}
