module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prefer-arrow'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  rules: {
    "@typescript-eslint/no-for-in-array": 1,
    '@typescript-eslint/adjacent-overload-signatures': 1,
    '@typescript-eslint/array-type': [1, 'array-simple'],
    'arrow-parens': 1,
    'arrow-body-style': 1,
    '@typescript-eslint/prefer-function-type': 1,
    '@typescript-eslint/class-name-casing': 1,
//    'spaced-comment': 1,
    curly: 1,
    complexity: 0,
    'eol-last': 1,
    'guard-for-in': 1,
    '@typescript-eslint/indent': [1, 2],
    '@typescript-eslint/interface-name-prefix': [1, 'always'],
    '@typescript-eslint/prefer-interface': 1,
    'no-unused-labels': 1,
    'max-classes-per-file': [1, 1],
    'max-len': [1, 120],
    '@typescript-eslint/explicit-member-accessibility': [1, { overrides: { constructors: 'no-public' } }],
    '@typescript-eslint/member-ordering': [1, { default: ['static-field'] }],
    'new-parens': 1,
    '@typescript-eslint/no-angle-bracket-type-assertion': 1,
    '@typescript-eslint/no-explicit-any': 1,
    'no-caller': 1,
    'no-bitwise': 1,
    // [1]
    'no-cond-assign': 1,
    'no-multiple-empty-lines': [1, { max: 1 }],
    'no-console': 1,
    'no-new-wrappers': 1,
    'no-debugger': 1,
    'constructor-super': 1,
    'no-empty': 1,
    'no-empty-function': [1, { "allow": ["constructors"] }],
    '@typescript-eslint/no-empty-interface': 1,
    'no-eval': 1,
    'no-invalid-this': 1,
    '@typescript-eslint/no-misused-new': 1,
    '@typescript-eslint/no-namespace': 1,
    '@typescript-eslint/no-parameter-properties': 0,
    '@typescript-eslint/no-triple-slash-reference': 1,
    'no-shadow': 1,
    'dot-notation': 1,
    'no-throw-literal': 1,
    'no-fallthrough': 1,
    'no-trailing-spaces': 1,
    'no-undef-init': 1,
    'no-unsafe-finally': 1,
    'no-unused-expressions': 1,
    '@typescript-eslint/no-use-before-define': 1,
    'no-var': 1,
    '@typescript-eslint/no-var-requires': 1,
    'quote-props': [1, 'consistent-as-needed'],
    'object-shorthand': 1,
    //    'one-var': 1,
    'prefer-arrow/prefer-arrow-functions': 1,
    'prefer-const': 1,
    '@typescript-eslint/prefer-for-of': 1,
    quotes: [1, 'single', 'avoid-escape'],
    radix: 1,
    'space-before-function-paren': [1, {
      "anonymous":"never",
      "named":"never"
    }],
    eqeqeq: 1,
    'valid-typeof': 0,
    '@typescript-eslint/unified-signatures': 1,
    'use-isnan': 1
  }
};
