/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    return new Promise(function (resolve) {
        const startTime = Date.now();
        // Busy wait loop
        while (Date.now() - startTime < milliseconds) {
            // This loop will block the thread
        }
        resolve();
    });
}

module.exports = sleep;