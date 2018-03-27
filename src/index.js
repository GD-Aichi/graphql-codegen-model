const fs = require('fs');

const type = fs.readFileSync(__dirname + '/type.handlebars', 'utf8');

const config = {
  inputType: 'MULTIPLE_FILES',
  templates: {
    type
  },
  flattenTypes: true,
  filesExtension: 'ts',
  primitives: {
    String: 'string',
    Int: 'number',
    Float: 'number',
    Boolean: 'boolean',
    ID: 'string'
  }
};

module.exports = {
  default: config
};
