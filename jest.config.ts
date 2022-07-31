import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  testEnvironment: 'jsdom',
  coverageThreshold: {
    global: {
      lines: 80,
    },
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.ts',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.ts',
  },
};
export default config;
