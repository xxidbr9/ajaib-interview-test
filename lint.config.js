module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --fix --ignore-pattern="src/**/*.d.ts"',
    () => 'tsc --skipLibCheck --noEmit',
  ],
  '*.{js,jsx,ts,tsx,json,css,js}': ['prettier src -c --write'],
};
