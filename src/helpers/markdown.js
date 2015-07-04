var marked = require('marked');
var fs = require('fs');

module.exports = function(filename) {
  return marked(fs.readFileSync(filename, 'utf-8'));
}