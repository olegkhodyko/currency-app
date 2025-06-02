module.exports = {
  root: true,
  extends: '@react-native',
  env: {
    jest: true,
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  rules: {
    'react-hooks/exhaustive-deps': 'off',
  },
};
