import eienjs from '@eienjs/eslint-config';

export default eienjs({
  ignores: ['docs'],
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },
});
