// ! **************************************** GETTERS TESTS ****************************************

import { getAverage, getCats, getItemName, getItemsByCat } from "../src/getters"

/**
 * ? GET AVERAGE
 */
describe("getAverage", () => {

  test('getAverage returns the correct average for a given product id', () => {
    const items1 = [
      { product: 'A', score: 5 },
      { product: 'B', score: 4 },
      { product: 'A', score: 3 },
      { product: 'B', score: 2 },
      { product: 'A', score: 1 },
    ];

    const expected1 = 3; // (5+3+1)/3 = 3
    expect(getAverage('A', items1)).toEqual(expected1);

    const items2 = [
      { product: 'X', score: 8 },
      { product: 'Y', score: 7 },
      { product: 'Z', score: 6 },
      { product: 'X', score: 5 },
      { product: 'Y', score: 4 },
      { product: 'Z', score: 3 },
      { product: 'X', score: 2 },
      { product: 'Y', score: 1 },
    ];

    const expected2 = 4.5; // (6+3)/2 = 4.5
    expect(getAverage('Z', items2)).toEqual(expected2);
  })

  test('getAverage returns undefined if the given product id is not found in the array', () => {
    const items3 = [
      { product: 'A', score: 5 },
      { product: 'B', score: 4 },
      { product: 'A', score: 3 },
    ];

    const expected3 = undefined;
    expect(getAverage('C', items3)).toEqual(expected3);
  })
})

/**
 * ? GET CATS
 */
describe('getCats', () => {
  test('returns an empty array when given an empty array', () => {
    const items = [];
    const result = getCats(items);

    expect(result).toEqual([]);
  })

  test('returns an array with one category when given an array with one item', () => {
    const items = [{cat: 'A'}];
    const result = getCats(items);

    expect(result).toEqual(['A']);
  })

  test('returns an array with unique categories when given an array with multiple items', () => {
    const items = [{cat: 'A'}, {cat: 'B'}, {cat: 'A'}, {cat: 'C'}];
    const result = getCats(items);

    expect(result).toEqual(['A', 'B', 'C']);
  })

  test('returns an array with unique categories when given an array with duplicates', () => {
    const items = [{cat: 'A'}, {cat: 'B'}, {cat: 'A'}, {cat: 'B'}];
    const result = getCats(items);

    expect(result).toEqual(['A', 'B']);
  })
});

/**
 * ? GET ITEM NAME
 */
describe('getItemName', () => {
  test('should return the correct name of the item with the given id', () => {
    const items = [{ _id: '1', name: 'Item 1' }, { _id: '2', name: 'Item 2' }];
    const id = '2';
    const expected = 'Item 2';

    const result = getItemName(id, items);
    expect(result).toEqual(expected);
  })

  test('should return false if no item is found with the given id', () => {
    const items = [{ _id: '1', name: 'Item 1' }, { _id: '2', name: 'Item 2' }];
    const id = '3';

    const result = getItemName(id, items);
    expect(result).toBe(false);
  })

  test('should return false if the provided items array is empty', () => {
    const items = [];
    const id = '1';

    const result = getItemName(id, items);
    expect(result).toBe(false);
  })
})

/**
 * ? GET ITEMS BY CAT
 */
describe('getItemsByCat', () => {
  const assert = require('assert');

  test("should group an array of items by category & sort each category's item list by name", () => {
    const items = [
      { name: 'apple', cat: 'fruit' },
      { name: 'pear', cat: 'fruit' },
      { name: 'carrot', cat: 'vegetable' },
      { name: 'broccoli', cat: 'vegetable' }
    ];

    const expected = {
      fruit: [
        { name: 'apple', cat: 'fruit' },
        { name: 'pear', cat: 'fruit' }
      ],
      vegetable: [
        { name: 'broccoli', cat: 'vegetable' },
        { name: 'carrot', cat: 'vegetable' }
      ]
    };

    const actual = getItemsByCat(items);
    assert.deepStrictEqual(actual, expected);
  })

  test('should return an empty object if the input array is empty', () => {
    const items = [];
    const expected = {};

    const actual = getItemsByCat(items);
    assert.deepStrictEqual(actual, expected);
  })

  test('should handle an array with only one item', () => {
    const items = [{ name: 'apple', cat: 'fruit' }];
    const expected = { fruit: [{ name: 'apple', cat: 'fruit' }] };

    const actual = getItemsByCat(items);
    assert.deepStrictEqual(actual, expected);
  })

  test('should handle an array with items in only one category', () => {
    const items = [
      { name: 'apple', cat: 'fruit' },
      { name: 'pear', cat: 'fruit' },
      { name: 'kiwi', cat: 'fruit' }
    ];

    const expected = {
      fruit: [
        { name: 'apple', cat: 'fruit' },
        { name: 'kiwi', cat: 'fruit' },
        { name: 'pear', cat: 'fruit' }
      ]
    };

    const actual = getItemsByCat(items);
    assert.deepStrictEqual(actual, expected);
  })

  test('should handle an array with items in multiple categories with same names', () => {
    const items = [
      { name: 'apple', cat: 'fruit' },
      { name: 'apple', cat: 'fruit' },
      { name: 'apple', cat: 'vegetable' },
      { name: 'apple', cat: 'vegetable' }
    ];

    const expected = {
      fruit: [
        { name: 'apple', cat: 'fruit' },
        { name: 'apple', cat: 'fruit' }
      ],
      vegetable: [
        { name: 'apple', cat: 'vegetable' },
        { name: 'apple', cat: 'vegetable' }
      ]
    };

    const actual = getItemsByCat(items);
    assert.deepStrictEqual(actual, expected);
  })
})
