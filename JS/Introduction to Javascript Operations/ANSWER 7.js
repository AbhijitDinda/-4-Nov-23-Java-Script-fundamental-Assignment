function circleRedius(redius) {
    const R = redius;

    const area = Math.PI * R * R;
    return area;
}

const result=circleRedius(10);
console.log(result);