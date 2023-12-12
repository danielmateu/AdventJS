/**
 * En el taller de Santa, los elfos aman los acertijos 🧠. Este año, han creado uno especial: un desafío para formar un palíndromo navideño.

Un palíndromo es una palabra que se lee igual hacia adelante y hacia atrás. Los elfos quieren saber si es posible formar un palíndromo haciendo, como mucho, un intercambio de letras.

Crea una función getIndexsForPalindrome que reciba una cadena de caracteres y devolverá:
 */

// Si ya es un palíndromo, un array vacío.

// Si no es posible formar un palíndromo, null.

// Si se puede formar un palíndromo con un cambio, un array con las dos posiciones (índices) que se deben intercambiar para poder crearlo.

// Si se puede formar el palíndromo con diferentes intercambios, siempre se debe devolver el primero que se encuentre.

// function isPalindrome(word: string): boolean {
//     return word === [...word].reverse().join('');
// }

export function getIndexForPalindrome(word: string): number[] | null {

    // function isPalindrome(s: string): boolean {
    //     return s === s.split('').reverse().join('');
    // }

    // if (isPalindrome(word)) {
    //     return [];
    // }

    // for (let i = 0; i < word.length; i++) {
    //     for (let j = i + 1; j < word.length; j++) {
    //         let arr = word.split('');
    //         [arr[i], arr[j]] = [arr[j], arr[i]];
    //         let newS = arr.join('');
    //         if (isPalindrome(newS)) {
    //             return [i, j];
    //         }
    //     }
    // }

    // return null;

    function isPalindrome(arr: string[]): boolean {
        let len = arr.length;
        for (let i = 0; i < len / 2; i++) {
            if (arr[i] !== arr[len - 1 - i]) {
                return false;
            }
        }
        return true;
    }

    let arr = word.split('');

    if (isPalindrome(arr)) {
        return [];
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            if (isPalindrome(arr)) {
                return [i, j];
            }
            [arr[i], arr[j]] = [arr[j], arr[i]]; // swap back
        }
    }

    return null;

}