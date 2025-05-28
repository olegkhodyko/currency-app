module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@navigation': './src/navigation',
          '@utils': './src/utils',
          '@_types': './src/types',
          '@assets': './src/assets',
          '@hooks': './src/hooks',
          '@constants': './src/constants',
          '@theme': './src/theme',
        },
      },
    ],
  ],
};
