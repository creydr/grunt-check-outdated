'use strict';

exports.outdated = {
    setUp: function(done) {
        done();
    },
    basic: function(test) {
        test.expect(1);
        test.equals(1, 1);

        test.done();
    },
};
