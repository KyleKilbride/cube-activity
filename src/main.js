const {customReduce} = require('./section-1');
const {customFilter} = require('./section-2');
const {consolidate} = require('./section-3');

const SECTION_3_INPUT = [
    {
        1: [1, 3, 5, 7, 9],
    },
    {
        1: [0, 2, 4, 6, 8],
    },
    {
        2: [5, 5, 9],
    },
    {
        2: [5, 4, 3, 2, 1],
    },
];

console.log('Section 1: ', customReduce([1, 2, 3], (acc, currentValue) => {
    return acc + currentValue;
}, 0))

console.log('Section 2: ', customFilter(["a", "b", "c", "d"], (x) => x !== "a"))

console.log('Section 3: ', consolidate(SECTION_3_INPUT));