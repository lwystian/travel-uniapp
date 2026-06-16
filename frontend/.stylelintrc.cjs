module.exports = {
  extends: ['stylelint-config-standard-scss'],
  customSyntax: 'postcss-html',
  rules: {
    'selector-class-pattern': null,
    'scss/dollar-variable-pattern': null,
    'color-function-notation': 'legacy',
    'alpha-value-notation': 'number',
    'value-keyword-case': null,
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    'scss/load-partial-extension': null,
    'no-descending-specificity': null
  },
  ignoreFiles: ['dist/**/*', 'unpackage/**/*', 'node_modules/**/*']
}
