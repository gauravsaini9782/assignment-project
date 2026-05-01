let maxWeight = 15;

function check() {
    let weight = parseFloat(document.getElementById("weight").value);

    if (isNaN(weight)) {
        alert("Please enter a valid number");
        return;
    }

    if (weight <= maxWeight) {
        alert("✅ Baggage within limit");
    } else {
        let extra = weight - maxWeight;
        alert("❌ Overweight by " + extra + " kg");

        document.getElementById("removed").style.display = "inline";
        document.getElementById("remB").style.display = "inline";

        document.getElementById("removed").value = extra;
    }
}

function remove() {
    let removeWeight = document.getElementById("removed").value;
    alert("Remove " + removeWeight + " kg from baggage");
}