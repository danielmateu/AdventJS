// En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y un conjunto limitado de materiales.

// Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.

// Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.

function manufacture(gifts, materials) {
    let result: string[] = [];
    for (let i = 0; i < gifts.length; i++) {
        let gift = gifts[i];
        let canBeManufactured = true;
        for (let j = 0; j < gift.length; j++) {
            let material = gift[j];
            if (!materials.includes(material)) {
                canBeManufactured = false;
                break;
            }
        }
        if (canBeManufactured) {
            result.push(gift);
        }
    }
    return result;

    // const result = gifts.filter(gift =>
    //     gift.every(material => materials.includes(material))
    // );
    // return result;
}

// Tests

const gifts = ['ball', 'bottle', 'book', 'doll'];

const materials = ['a', 'b', 'l', 'o', 't'];

const giftsManufactured = manufacture(gifts, materials);