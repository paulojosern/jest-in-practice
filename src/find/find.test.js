'use strict'
import {expect} from 'chai'
import find from './find'

it('find  should be a function', () => {
    expect(find).to.be.a('function')
});
it('find([1, 2, 3], (item) => item === 1) should return 1', () => {
    const before = find([1, 2, 3], (item) => item === 1)
    const after = 1
    expect(before).to.be.deep.equal(after)
});
it('find([1, 2, 3], (item) => item > 2) should return 3', () => {
    const before = find([1, 2, 3], (item) => item > 2)
    const after = 3
    expect(before).to.be.deep.equal(after)
});
it('find([1, 2, 3], (item, index) => index === 1) should return 2', () => {
    const before = find([1, 2, 3], (item, index) => index === 1)
    const after = 2
    expect(before).to.be.deep.equal(after)
});
it('find([1, 2, 3], (item, index, array) => array[index] === 2) should return 2', () => {
    const before = find([1, 2, 3], (item, index, array) => array[index] === 2)
    const after = 2
    expect(before).to.be.deep.equal(after)
});