const {customReduce} = require('./section-1');
const {customFilter} = require('./section-2');

function functionRelayReverse(...functions) {    
    return (input, args) => {
        let result = input;
        
        for(let i = functions.length-1; i >= 0; i--) {
            result = functions[i](result, ...args[i])
        }

        return result; 
    }
}

function isKeyInArray(array, key) { 
    return array.some(obj => obj.hasOwnProperty(key)); 
}

function consolidate(input) {
    const functionArgs = [
        [
            ((acc, current) => {
                const currentKey = Object.keys(current)[0];
                
                const uniqueValues = customFilter(current[currentKey], (current, index, prompt) => {
                    return prompt.indexOf(current) == index
                });

                const summedValues = customReduce(uniqueValues, (acc, current) => {
                    return acc + current
                }, 0);
                
                acc[currentKey] = summedValues;

                return acc;
            }), {}
        ],
        [
            ((acc, current) => {
                const currentKey = Object.keys(current)[0];
    
                if (isKeyInArray(acc, currentKey)) {
                    const arrayValuesToAdd = current[currentKey];

                    for (index in acc) {
                        if (acc[index][currentKey]) {
                            acc[index][currentKey] = [...acc[index][currentKey], ...arrayValuesToAdd];
                        }
                    }
                } else {
                    acc.push(current);
                }
                return acc;
            }), []
        ]
    ]
    
    return functionRelayReverse(customReduce, customReduce)(input, functionArgs)
}

module.exports = {consolidate, functionRelayReverse, isKeyInArray}
