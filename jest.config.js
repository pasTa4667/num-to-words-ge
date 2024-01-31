module.exports = {
  // Indicates that the root directory of your project is the current directory
  rootDir: './',

  // A list of paths to directories that Jest should use to search for files
  roots: ['<rootDir>/src', '<rootDir>/tests'],

  // The file extensions Jest will look for when running tests
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  // Transform files with TypeScript using ts-jest
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },

  // Ignore certain directories from test coverage
  coveragePathIgnorePatterns: ['/node_modules/', '/tests/'],

  // Test environment options
  testEnvironment: 'node',

  // Setup files before running tests
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts'],

  // // Jest will exit with an error if there are any tests that are not covered by your specifications
  collectCoverage: true,

  // // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],

  // // The directory where Jest should output its coverage files
  coverageDirectory: '<rootDir>/coverage',
};
