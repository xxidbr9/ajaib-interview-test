module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --fix --ignore-pattern="src/**/*.d.ts"',
    () => 'tsc --skipLibCheck --noEmit',
  ],
  '*.{json,css}': ['prettier src -c --write'],
};
