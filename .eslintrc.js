module.exports = {
  root: true,
  extends: '@react-native',
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
          ['@', './'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },
};
