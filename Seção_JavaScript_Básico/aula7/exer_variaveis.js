let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

/*
const varATemp = varA;

varA = varB // A = B
varB = varC // B = C
varC = varATemp // C = A

é o mesmo que:
*/

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);