const {customFilter} = require('../section-2');

describe('section 2', () => {
    it('returns empty array if no elements pass the filter condition ', () => {
        const result = customFilter([1, 2, 3], (currentValue) => currentValue === 5);
        
        expect(result).toEqual([]);
    });

    it('returns elements that meet the filter condition', () => {
        const result = customFilter([1, 2, 3, 3, 2], (currentValue) => currentValue === 2);
        
        expect(result).toEqual([2, 2]);
    });

    it('returns undefined if used on empty array', () => {
        const result = customFilter([], (currentValue) => currentValue === 5);
        
        expect(result).toEqual(undefined);
    });

    it('does not mutate the original array', () => {
        const OGArray = ['zero', 'one', 'two'];
        
        const result = customFilter(OGArray, (currentValue) => typeof currentValue === 'string', []);

        // is not same array
        expect(result).not.toBe(OGArray);
        // but does equal it
        expect(result).toEqual(OGArray);
    });

    describe('datatypes', () => {
        it('works with and array of multiple datatypes', () => {
            const result = customFilter([1, '2', 3, true, {}, []], (currentValue) => currentValue === 3 || currentValue === true);
        
            expect(result).toEqual([3, true]);
        });
    });

    describe('args', () => {
        it('passes the index', () => {
            const result = customFilter(['this value', 'cube', 'cube'], (currentValue, index) => index === 0);
        
            expect(result).toEqual(['this value']);
        });

        it('passes the entire original prompt value', () => {
            const result = customFilter([1, 2, 3], (currentValue, _index, prompt) => prompt.includes(currentValue));
        
            expect(result).toEqual([1, 2, 3]);
        });
    });
});
