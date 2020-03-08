module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    // 'react-app',
    'airbnb'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/forbid-prop-types': 0,
    'react/prop-types': 0,
    'react/button-has-type': 0,
    'consistent-return': 0,
    'react/jsx-one-expression-per-line': 0,
    'no-console': 0,
    'max-len': 0,
    'react/jsx-closing-bracket-location': 0,
    'import/extensions': 0
  },
};
