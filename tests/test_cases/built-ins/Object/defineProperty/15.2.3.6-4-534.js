// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-534
description: >
    ES5 Attributes - success to update [[Get]] attribute of accessor
    property ([[Get]] is a Function, [[Set]] is a Function,
    [[Enumerable]] is true, [[Configurable]] is true) to different
    value
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        var getFunc = function () {
            return 1001;
        };

        var verifySetFunc = "data";
        var setFunc = function (value) {
            verifySetFunc = value;
        };

        Object.defineProperty(obj, "prop", {
            get: getFunc,
            set: setFunc,
            enumerable: true,
            configurable: true
        });

        var result1 = obj.prop === 1001;
        var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");

        Object.defineProperty(obj, "prop", {
            get: undefined
        });

        var result2 = typeof obj.prop === "undefined";
        var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");

        return result1 && result2 && desc1.get === getFunc && typeof desc2.get === "undefined";
    }
runTestCase(testcase);
