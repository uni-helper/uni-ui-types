module.exports = {
  '*.md': 'markdownlint --fix --ignore-path=.gitignore',
  './src/*.{js,cjs,mjs,ts,cts,mts}': 'eslint --fix --cache --ignore-path=.gitignore',
  './src/*.{ts,cts,mts,tsx}': () => 'tsc -p tsconfig.json --noEmit'
};
