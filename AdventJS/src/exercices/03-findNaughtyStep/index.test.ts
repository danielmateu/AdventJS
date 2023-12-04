
import { expect, test } from 'vitest'
import { findNaughtyStep } from './index'


test('findNaughtyStep returns empty string when no step has been added or removed', () => {
    const result = findNaughtyStep(['a', 'b', 'c'], ['a', 'b', 'c']);
    expect(result).toEqual('');
});

test('findNaughtyStep returns the added step', () => {
    const result = findNaughtyStep(['a', 'b', 'c'], ['a', 'b', 'c', 'd']);
    expect(result).toEqual('d');
});

test('findNaughtyStep returns the removed step', () => {
    const result = findNaughtyStep(['a', 'b', 'c'], ['a', 'b']);
    expect(result).toEqual('c');
});