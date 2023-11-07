function bmiCalculate(weight, height) {
    const W = weight;
    const H = height;

    const BMI = W/(H*H);
    return BMI;
}

const result=bmiCalculate(73,1.76);
console.log(result);