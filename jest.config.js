module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/packages'],
  testMatch: ['**/?(*.)+(test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ],
  moduleNameMapper: {
    '@mark-ui/(.+)$': '<rootDir>/packages/components/$1/src'
  }
};
