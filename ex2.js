// Euler default (3 & 5 below 1000)
function euler1() {
    let sum = 0;

    for (let i = 1; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    alert("Sum = " + sum);
}

// Custom a, b, n
function eulerCustom() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let n = parseInt(document.getElementById("n").value);

    if (isNaN(a) || isNaN(b) || isNaN(n)) {
        alert("Enter valid numbers");
        return;
    }

    let sum = 0;

    for (let i = 1; i < n; i++) {
        if (i % a === 0 || i % b === 0) {
            sum += i;
        }
    }

    alert("Custom Sum = " + sum);
}

// List version
function eulerlist() {
    let a = parseInt(document.getElementById("a1").value);
    let b = parseInt(document.getElementById("b1").value);
    let list = document.getElementById("l").value.split(",");

    let sum = 0;

    list.forEach(num => {
        let n = parseInt(num);
        if (!isNaN(n) && (n % a === 0 || n % b === 0)) {
            sum += n;
        }
    });

    alert("List Sum = " + sum);
}

// A list (length 2)
function euler2Lists() {
    let aList = document.getElementById("aList").value.split(",");
    let mList = document.getElementById("mList").value.split(",");

    let a1 = parseInt(aList[0]);
    let a2 = parseInt(aList[1]);

    let sum = 0;

    mList.forEach(num => {
        let n = parseInt(num);
        if (!isNaN(n) && (n % a1 === 0 || n % a2 === 0)) {
            sum += n;
        }
    });

    alert("Sum (2 elements) = " + sum);
}

// A list (any length)
function euler2Lists1() {
    let aList = document.getElementById("aList").value.split(",");
    let mList = document.getElementById("mList").value.split(",");

    let sum = 0;

    mList.forEach(num => {
        let n = parseInt(num);

        if (!isNaN(n)) {
            for (let i = 0; i < aList.length; i++) {
                let a = parseInt(aList[i]);

                if (n % a === 0) {
                    sum += n;
                    break;
                }
            }
        }
    });

    alert("Sum (any length) = " + sum);
}