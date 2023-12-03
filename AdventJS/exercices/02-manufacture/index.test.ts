
import { expect, test } from 'vitest'
import { manufacture } from '.'

test('manufacture returns gifts that can be manufactured', () => {
    const result = manufacture(['abc', 'def'], ['a', 'b', 'c', 'd', 'e', 'f']);
    expect(result).toEqual(['abc', 'def']);
});

test('manufacture returns empty array when no gifts can be manufactured', () => {
    const result = manufacture(['abc', 'def'], []);
    expect(result).toEqual([]);
});

