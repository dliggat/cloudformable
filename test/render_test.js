require('shelljs/global');

var assert  = require('assert');
var fs      = require('fs');

var filename = '_output/stack.template';

describe('_output', function() {

  describe('*.template', function() {

    var json;
    before(function(done) {
      try {
        var stats = fs.statSync(filename);
      } catch (e) {
        exec('grunt render');
      } finally {
        json = JSON.parse(fs.readFileSync(filename));
        done();
      }
    });

    it('should be valid JSON', function () {});
    it('should be the expected template format version', function () {
      assert.equal(json['AWSTemplateFormatVersion'], '2010-09-09');
    });
    it('should contain certain top level keys', function () {
      assert('Description' in json);
      assert('Metadata' in json);
      assert('Parameters' in json);
      assert('Resources' in json);
      assert('Outputs' in json);
    });

  });

});
