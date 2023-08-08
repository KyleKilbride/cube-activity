const {customReduce} = require('../section-1');

describe('section 1', () => {
    it('does not execute over an empty array', () => {
        const result = customReduce([], (acc, current) => {
            return acc + current;
        }, 0);

        expect(result).toEqual(undefined);
    });

    it('does not mutate the original array', () => {
        const OGArray = ['zero', 'one', 'two'];
        
        const result = customReduce(OGArray, (acc, curr, _index, prompt) => {
            acc.push(curr);

            return acc;
        }, []);

        // is not same array
        expect(result).not.toBe(OGArray);
        // but does equal it
        expect(result).toEqual(OGArray);
    });

    it('reduces an array into a single value', () => {
        const result = customReduce([1, 2, 3], (acc, current) => {
            return acc + current;
        }, 0);

        expect(result).toEqual(6);
    });

    describe('datatypes', () => {
        it('works for an array of different datatypes', () => {
            const result = customReduce(['1', 2, '3', true], (acc, current) => {
                return acc + current;
            }, 0);

            expect(result).not.toBe(undefined);
        });
    });

    describe('args', () => {
        it('passes the index', () => {
            const result = customReduce(['zero', 'one', 'two'], (acc, _, index) => {
                return acc + index;
            }, 0);

            expect(result).toBe(3);
        });

        it('passes entire original prompt value', () => {
            const result = customReduce(['zero', 'one', 'two'], (acc, _curr, _index, prompt) => {
                return prompt;
            }, null);

            expect(result).toEqual(['zero', 'one', 'two']);
        });
    });
});
