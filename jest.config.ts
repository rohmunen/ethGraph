import type { Config } from "jest"

const config: Config = {
  moduleFileExtensions: [ 'ts', 'tsx', 'js' ],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  testEnvironment: "jsdom",
  transform: {
    '^.+\\.(ts(x?)|js)$': 'ts-jest',
  },
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$': "identity-obj-proxy",
  },
};

export default config;