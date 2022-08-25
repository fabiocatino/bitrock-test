const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFiles: ["@testing-library/react/dont-cleanup-after-each"],
  setupFilesAfterEnv: ["<rootDir>/utils/setupTests.ts"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  moduleNameMapper: {
    "^atoms(.*)$": "<rootDir>/components/atoms/$1",
    "^molecules(.*)$": "<rootDir>/components/molecules/$1",
    "^organisms(.*)$": "<rootDir>/components/organisms/$1",
    "^pages(.*)$": "<rootDir>/components/pages/$1",
    "^context(.*)$": "<rootDir>/context/$1",
    "^hooks(.*)$": "<rootDir>/hooks/$1",
    "^icons(.*)$": "<rootDir>/icons/$1",
    "^resources(.*)$": "<rootDir>/resources/$1",
    "^translations(.*)$": "<rootDir>/translations/$1",
    "^types(.*)$": "<rootDir>/types/$1",
    "^utils(.*)$": "<rootDir>/utils/$1",
  },
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);
