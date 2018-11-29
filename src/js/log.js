define(function (require, exports) {
    'use strict';

    /**
     * 0 : trace
     * 1 : debug
     * 2 : error
     * 3 : fatal
     */
    var level = 1;

    return {
        trace: function (msg) {
            if (level == 0) {
                console.log(msg);
            }
        },
        debug: function (msg) {
            if (level == 1) {
                console.log(msg);
            }
        },
        error: function (msg) {
            if (level == 2) {
                console.log(msg);
            }
        },
        fatal: function (msg) {
            if (level == 3) {
                console.log(msg);
            }
        }
    };

});