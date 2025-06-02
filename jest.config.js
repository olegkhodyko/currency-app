module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(react-native' +
      '|react-native-reanimated' +
      '|react-native-toast-message' +
      '|@react-native' +
      '|react-native-gesture-handler' +
      '|@react-navigation)/)',
  ],
  setupFiles: ['./jestSetup.js'],
  moduleNameMapper: {
    '^@api/(.*)$': '<rootDir>/src/api/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@screens/(.*)$': '<rootDir>/src/screens/$1',
    '^@navigation/(.*)$': '<rootDir>/src/navigation/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@_types/(.*)$': '<rootDir>/src/types/$1',
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@constants/(.*)$': '<rootDir>/src/constants/$1',
    '^@theme/(.*)$': '<rootDir>/src/theme/$1',
    '^@modules/(.*)$': '<rootDir>/src/modules/$1',
    '^@store/(.*)$': '<rootDir>/src/store/$1',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
