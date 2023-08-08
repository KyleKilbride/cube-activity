function customFilter(prompt, callback) {
    const result = [];

    if(prompt.length === 0) return;

    for (let i = 0; i < prompt.length; i++) {
        if (callback(prompt[i], i, prompt)) {
            result.push(prompt[i]);
        }
    }

    return result;
}

module.exports = {customFilter}
