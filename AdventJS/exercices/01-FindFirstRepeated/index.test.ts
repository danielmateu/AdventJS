// Require del archivo a testear
// Importar con el require de node
const {findFirstRepeated} = require('./index');
// import {findFirstRepeated} from './index';
// import {describe, expect, test} from '@jest/globals';
// Usar require para importar {describe, expect, test} from '@jest/globals';
const {describe, expect, test} = require('@jest/globals');

describe('Find first repeated', () => {
    test('should return 2', () => {
        expect(findFirstRepeated([1, 2, 3, 2, 1, 2, 3])).toBe(2);
    });

    test('should return 1', () => {
        expect(findFirstRepeated([1, 2, 3, 4, 5, 1])).toBe(1);
    });
});



