import type { Config } from '@jest/types';

const minimalCoverage = 0;

const config: Config.InitialOptions = {
  verbose: true,
  testEnvironment: 'jsdom',
  coverageThreshold: {
    global: {
      lines: minimalCoverage,
      branches: minimalCoverage,
      functions: minimalCoverage,
      statements: minimalCoverage,
    },
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.test.{ts,tsx}',
  ],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.ts',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.ts',
  },
  coveragePathIgnorePatterns: ['index.ts'],
};
export default config;
