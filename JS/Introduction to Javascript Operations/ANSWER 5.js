function simpleInterest(principal, rate, time) {
    const P = principal;
    const R = rate;
    const T = time;

    const I = (P * T * R) / 100;
    return I;
}

const int=simpleInterest(100,15,2);
console.log(int);