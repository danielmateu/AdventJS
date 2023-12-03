// En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, añadiendo o eliminando un paso no planificado.

// Tienes la secuencia original de pasos en la fabricación original y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.

// Tu tarea es escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación. Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.

export function findNaughtyStep(original, modified) {
    if (original.length < modified.length) {
        // Un paso ha sido añadido
        for (let i = 0; i < modified.length; i++) {
            if (original[i] !== modified[i]) {
                return modified[i];
            }
        }
    } else if (original.length > modified.length) {
        // Un paso ha sido eliminado
        for (let i = 0; i < original.length; i++) {
            if (original[i] !== modified[i]) {
                return original[i];
            }
        }
    }
    return '';
}