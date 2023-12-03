
import { expect, test } from 'vitest'

import { findFirstRepeated } from './index'

test('findFirstRepeated returns first repeated number', () => {
    const result = findFirstRepeated([1, 2, 3, 2, 4]);
    expect(result).toBe(2);
});

test('findFirstRepeated returns -1 when there are no repeats', () => {
    const result = findFirstRepeated([1, 2, 3, 4]);
    expect(result).toBe(-1);
});

test('findFirstRepeated handles empty arrays', () => {
    const result = findFirstRepeated([]);
    expect(result).toBe(-1);
});

