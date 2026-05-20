// Parse single item
let parse = (i) => {

    let o = parseInt(i);

    if (isNaN(o))
        throw ("NaN");

    return o;
};



// Safely parse list
function safeParseList(text) {

    return text
        .trim()
        .split(/\s+/)

        .map(item => {

            try {

                return parse(item);

            } catch {

                return null;
            }

        })

        .filter(item => item !== null);
}



// Main logic
function calculateResult5(input) {

    try {

        // Must contain :
        if (!input.includes(':'))
            throw ("Invalid format");


        const [factorText, multipleText] =
            input.split(':');


        const factors =
            safeParseList(factorText);

        const multiples =
            safeParseList(multipleText);


        // Cannot continue if empty
        if (
            factors.length === 0 ||
            multiples.length === 0
        )

            throw ("Unfixable");


        const result = multiples

            .filter(value =>

                factors.some(factor =>

                    factor !== 0 &&
                    value % factor === 0

                )
            )

            .reduce(
                (sum, value) => sum + value,
                0
            );


        return `${result} : ${input}`;

    }

    catch {

        return `corrupt : ${input}`;

    }

}



// Button function
function runCalculation5() {

    const input =
        document.getElementById("inputText5").value;

    const result =
        calculateResult5(input);

    document.getElementById("output5").textContent =
        result;
}
