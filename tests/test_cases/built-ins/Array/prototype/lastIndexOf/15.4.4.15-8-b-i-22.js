// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.15-8-b-i-22
description: >
    Array.prototype.lastIndexOf - element to be retrieved is inherited
    accessor property without a get function on an Array-like object
includes: [runTestCase.js]
---*/

function testcase() {

        try {
            Object.defineProperty(Object.prototype, "0", {
                set: function () { },
                configurable: true
            });
            return 0 === Array.prototype.lastIndexOf.call({ length: 1 }, undefined);
        } finally {
            delete Object.prototype[0];
        }
    }
runTestCase(testcase);
