// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.19-5-13
description: Array.prototype.map - Number object can be used as thisArg
includes: [runTestCase.js]
---*/

function testcase() {

        var objNumber = new Number();

        function callbackfn(val, idx, obj) {
            return this === objNumber;
        }

        var testResult = [11].map(callbackfn, objNumber);
        return testResult[0] === true;
    }
runTestCase(testcase);
