module.exports = {
  root: true,
  extends: '@react-native',
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']], // @ 별칭을 src 폴더로 설정
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },
};
