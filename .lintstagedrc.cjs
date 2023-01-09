module.exports = {
  '*.md': 'markdownlint --fix',
  '*.{js,cjs,mjs,ts,cts,mts}':
    'eslint --fix --cache --no-error-on-unmatched-pattern --ignore-path=.gitignore',
};
