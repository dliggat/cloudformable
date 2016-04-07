var assert  = require('assert');
var fs      = require('fs');

describe('_output', function() {
  describe('stack.template', function () {
    it('should contain specific top level objects', function () {
      var obj = JSON.parse(fs.readFileSync('_output/stack.template', 'utf8'));
      assert.equal(obj["AWSTemplateFormatVersion"], "2010-09-09");
    });
  });
});
