'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.ng_html2js = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  normal: function(test) {
    test.expect(1);

    var actual = grunt.file.read('test/tests/test.js');
    var expected = grunt.file.read('test/expected/expectedTestHTMLjs');
    test.equal(actual, expected, 'should produce output that matches the contents of expectedTestHTMLjs');

    test.done();
  },
  groupNormal: function(test) {
    test.expect(2);

    var actual = grunt.file.read('test/tests/test_group.js');
    var expected = grunt.file.read('test/expected/expectedTestHTMLjs');
    test.equal(actual, expected, 'should produce output that matches the contents of expectedTestHTMLjsModule');

    var actual2 = grunt.file.read('test/tests/test2_group.js');
    var expected2 = grunt.file.read('test/expected/expectedTestHTMLjs2');
    test.equal(actual, expected, 'should produce output that matches the contents of expectedTestHTMLjs2');

    test.done();
  },
  moduleName: function(test) {
    test.expect(1);

    var actual = grunt.file.read('test/tests/test_module.js');
    var expected = grunt.file.read('test/expected/expectedTestHTMLjsModule');
    test.equal(actual, expected, 'should produce output that matches the contents of expectedTestHTMLjsModule');

    test.done();
  },
  groupModuleName: function(test) {
    test.expect(2);

    var actual = grunt.file.read('test/tests/test_module_group.js');
    var expected = grunt.file.read('test/expected/expectedTestHTMLjsModule');
    test.equal(actual, expected, 'should produce output that matches the contents of expectedTestHTMLjsModule');

    var actual2 = grunt.file.read('test/tests/test2_module_group.js');
    var expected2 = grunt.file.read('test/expected/expectedTestHTMLjsModule2');
    test.equal(actual, expected, 'should produce output that matches the contents of expectedTestHTMLjsModule2');

    test.done();
  },
};
