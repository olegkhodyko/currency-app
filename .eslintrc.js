module.exports = {
  root: true,
  extends: '@react-native',
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  rules: {
    'react-hooks/exhaustive-deps': 'off',
  },
};
