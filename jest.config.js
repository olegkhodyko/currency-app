module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|react-native-reanimated|react-native-toast-message|@react-native|react-native-gesture-handler|@react-navigation)/)',
  ],
  setupFiles: ['./jestSetup.js'],
};
