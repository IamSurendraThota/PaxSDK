var exec = require('cordova/exec');

exports.printSummary = function (arg0, success, error) {
    exec(success, error, 'PaxSDK', 'printSummary', [arg0]);
};

exports.printReceipt = function (arg0, success, error) {
    exec(success, error, 'PaxSDK', 'printReceipt', [arg0]);
};
