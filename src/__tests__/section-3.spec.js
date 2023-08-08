const s3 = require('../section-3');

describe('section 3', () => {
    describe('isKeyInArray()', () => {
        it('returns true if key is present in array', () => {
            const result = s3.isKeyInArray([{'kyle': 1, 'John': 1}], 'John')

            expect(result).toBe(true)
        });

        it('returns false if key is not present in array', () => {
            const result = s3.isKeyInArray([{'kyle': 1, 'John': 1}], 'Bruce')

            expect(result).toBe(false)
        });
    });

    describe('functionRelayReverse()', () => {
        const mockArgs = ['', [[() => null, {}], [() => null, {}]]];

        it('can call a single function', () => {
            const function1 = (input) => input + 'one';
             
            const result = s3.functionRelayReverse(function1)('', [[]]);

            expect(result).toEqual('one');
        });

        it('calls multiple functions from right to left and iterrates on their return values', () => {
            const function1 = (input) => input + 'one';
            const function2 = (input) => input + 'two ';
             
            const result = s3.functionRelayReverse(function1, function2)(...mockArgs);

            expect(result).toEqual('two one')
        });

        it('calls functions', () => {
            const function1 = jest.fn();
            const function2 = jest.fn();
             
            s3.functionRelayReverse(function2, function1)('', [[], []]);

            expect(function1).toHaveBeenCalled();
            expect(function2).toHaveBeenCalled();
        });

        it('returns function', () => {
            const function1 = (input) => input + 'one';
             
            const result = s3.functionRelayReverse(function1);

            expect(typeof result).toEqual('function');
        });
    });

    describe('consolidate()', () => {
        it('consolidates array of objects by keys', () => {
            const mockInput = [
                {1: [1, 2, 3],},
                {2: [1, 2, 3],},
                {2: [11 ,10, 20],},
                {3: [90]}
                
            ];

            const result = s3.consolidate(mockInput);

            expect(result).toEqual(expect.objectContaining({
                1: 6,
                2: 47,
                3: 90
            }));
        });

        it('only adds unique values for each key', () => {
            const mockInput = [
                {1: [4],},
                {1: [4],},
                {2: [6],},
                {2: [6],},
            ];

            const result = s3.consolidate(mockInput);

            expect(result).toEqual({
                1: 4,
                2: 6,
            });
        });
    });
});
