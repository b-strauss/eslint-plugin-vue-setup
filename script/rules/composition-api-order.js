'use strict';

const utils = require('eslint-plugin-vue/lib/utils');

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'prevent confusing order of composition api elements',
    },
    fixable: 'code',
  },
  create (context) {
    return {};
  },
};
