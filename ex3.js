let listEuler1 = (a, b, l) => {

    let sum = 0;

    for (let i = 0; i < l.length; i++) {
        if (l[i] % a === 0 || l[i] % b === 0) {
            sum += l[i];
        }
    }

    return sum;
};

let eulerlist = () => {

    let a = 2;
    let b = 3;

    let l = [1,2,3,4,5,6,7,9,10,10,10];

    alert(listEuler1(a, b, l));
};
