/*
Santa está experimentando con nuevos diseños de regalos y necesita tu ayuda para visualizarlos en 3D.

Tu tarea es escribir una función que, dado un tamaño n (entero), genere un dibujo de un regalo en 3D utilizando caracteres ASCII.

Las líneas de los regalos se dibujan con # y las caras con el símbolo que nos pasan como parámetro
*/

/*
Importante: Nos han dicho que siempre hay que dejar un salto de línea al final del dibujo.

Nota: Ten en cuenta que, en los tests, la primera línea se ve empujada por el caracter ".
*/

// Ejemplo de dibujo de un regalo de tamaño 4 con el símbolo +:

/*

   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####

*/

// export function drawGift(size: number, symbol: string): string {

//     if (size <= 1) return '#\n'

//     let p = `${' '.repeat(size - 1)}${'#'.repeat(size)}\n`
//     let p2 = ''
//     let c = size - 2
//     for (let i = 0; i < size - 2; i++, c--) {
//         p += `${' '.repeat(c) + "#" + symbol.repeat(size - 2)}#${symbol.repeat(i)}#\n`
//         p2 += `${'#' + symbol.repeat(size - 2)}#${symbol.repeat(c - 1)}#\n`
//     }

//     p += `${'#'.repeat(size)}${symbol.repeat(size - 2)}#\n`
//     p += p2 + `${'#'.repeat(size)}\n`

//     return p

// }

export function drawGift(size: number, symbol: string): string {
    if (size <= 1) return '#\n'

    const hash = '#';
    let parteSuperior = `${' '.repeat(size - 1)}${hash.repeat(size)}\n`
    let parteInferior = ''
    let c = size - 2

    // Construimos la parte superior e inferior del regalo
    for (let i = 0; i < size - 2; i++, c--) {
        const espacios = ' '.repeat(c);
        const simbolos = symbol.repeat(size - 2);
        const simbolosInferiores = symbol.repeat(c - 1);
        const simbolosSuperiores = symbol.repeat(i);

        parteSuperior += `${espacios}${hash}${simbolos}${hash}${simbolosSuperiores}${hash}\n`
        parteInferior += `${hash}${simbolos}${hash}${simbolosInferiores}${hash}\n`
    }

    // Agregamos la última línea de la parte superior y la parte inferior al regalo
    const simbolos = symbol.repeat(size - 2);
    const hashLine = hash.repeat(size);
    parteSuperior += `${hashLine}${simbolos}${hash}\n`;
    parteSuperior += parteInferior + `${hash.repeat(size)}\n`
    return parteSuperior
}
