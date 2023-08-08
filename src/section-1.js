function customReduce(prompt, callback, value) {
    if (prompt.length === 0) return;
    
    for(let i = 0; i < prompt.length; i++) {
        value = callback(value, prompt[i], i, prompt);
    }

    return value;
}

module.exports = {customReduce}