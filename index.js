'use strict';

const fix = value => {
  if (!/^0[a-zA-Z]/.test(value)) {
    return value;
  }

  const indicator = value[1].toLowerCase();
  const val = value.slice(2).toUpperCase();

  return `0${indicator}${val}`;
};

const create = context => {
  return {
    Literal: node => {
      const value = node.raw;
      const fixedValue = fix(value);

      if (value !== fixedValue) {
        context.report({
          node,
          message: 'Invalid number literal casing.',
          fix: fixer => fixer.replaceText(node, fixedValue)
        });
      }
    }
  };
};

module.exports = {
  rules: {
    'number-literal-case': {
      create,
      meta: {
        description: 'Enforce lowercase identifier and uppercase value for number literals',
        type: 'suggestion',
        fixable: 'code'
      }
    }
  },
  configs: {
    recommended: {
      env: {
        es6: true
      },
      parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module'
      },
      plugins: ['number-literal-case'],
      rules: {
        'number-literal-case/number-literal-case': 'error'
      }
    }
  }
};
