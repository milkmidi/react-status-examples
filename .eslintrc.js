module.exports = {
  extends: ['airbnb'],
  env: {
    browser: true,
  },
  parser: 'babel-eslint',
  rules: {
    'global-require': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'no-param-reassign': ['error', { props: false }],
    'object-curly-newline': 0,
    'react/button-has-type': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-filename-extension': 0,
    'react/prop-types': 0,
    'react/state-in-constructor': 0,
    'react/jsx-one-expression-per-line': 0,
    'no-plusplus': 0,
  },
};
