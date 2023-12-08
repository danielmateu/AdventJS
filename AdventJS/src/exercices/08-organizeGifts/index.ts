
/**
 * Los elfos están muy ocupados en el taller de Santa Claus organizando regalos 🎁 para la víspera de Navidad 🎄.
 */

/**
 * El formato de entrada es especial, ya que indica el número de regalos y el tipo de regalo con letras de la a a la z. Por ejemplo, '66a11b' significa 66 regalos a y 11 regalos b.
 */

/**
 * Cada 10 regalos del mismo tipo se empaquetan en una caja, representada por {x}. Por ejemplo, 20 regalos tipo a se empaquetan en 2 cajas así: {a}{a}
 */

/**
 * Cada 5 cajas se apilan en un palé, representado por [x]. Por ejemplo, 10 cajas de a se apilan en 2 palés de esta manera: [a][a]
 */

/**
 * Cualquier regalo adicional se coloca en una bolsa, representada por () y se colocan todas dentro. Por ejemplo 4 regalos de b se colocan en una bolsa así (bbbb)
 */

/**
 * Los regalos luego se colocan en el siguiente orden: palés, cajas y bolsas. Y los regalos aparecen en el mismo orden que la cadena de entrada.
 */

/**
 * Tu tarea es escribir una función organizeGifts que tome una cadena de regalos como argumento y devuelva una cadena representando el almacén.
 */

/**
 * Ejemplo:
 * const result1 = organizeGifts(`76a11b`)
console.log(result1) -> '[a]{a}{a}(aaaaaa){b}(b)'
 */

// interface Gift {
//     name: string;
//     size: string;
// }


export function organizeGifts(gifts: string) {
    // Code here
    const matches = [...gifts.matchAll(/(\d+)(\w)/g)];

    return matches.map(([, qtty, letter]) => {
        const quantity = +qtty;

        const pallets = Math.trunc(quantity / 50);
        const boxes = Math.trunc((quantity - (50 * pallets)) / 10);
        const bags = quantity - (pallets * 50) - (boxes * 10);

        let palletsString = `[${letter}]`.repeat(pallets);
        let boxesString = `{${letter}}`.repeat(boxes);
        let bagsString = `(${letter})`.repeat(bags).replace(/\)\(/g, '');

        return palletsString + boxesString + bagsString;
    }).join('');
}