const notas = [10,6,8,5.5,10];

console.log(notas)

notas.pop();

console.log(notas)

const media = (notas[0] + notas[2] + notas[3]) / notas.length;

console.log(`A média é ${media}.`)

// o metodo pop() remove o ultimo elemento do seu Array.
