module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  rootDir: "src",
  roots: [
    '<rootDir>/',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testEnvironment: 'node',
  testMatch: [
    "<rootDir>/__tests__/**/*.(test).ts"
  ],
  moduleFileExtensions: ['ts', 'js', 'json'],
  coverageReporters: [
    'text'
  ]
};
