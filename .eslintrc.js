module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'react-app',
    // airbnb (for when you want to use the better one)
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
    'react/prop-types': 0
  },
};
