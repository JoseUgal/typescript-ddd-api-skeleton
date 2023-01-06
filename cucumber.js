const common = [
  '--require-module ts-node/register', // Load TypeScript module
];

const mooc_backend = [
  ...common,
  'tests/apps/Mooc/Backend/Features/**/*.feature',
  '--require tests/apps/Mooc/Backend/Features/Steps/*.steps.ts',
].join(' ');

module.exports = {
  mooc_backend,
};
