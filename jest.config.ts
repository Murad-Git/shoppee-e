const nextJest = require(`next/jest`);
const createJestConfig = nextJest({
  dir: `./`,
});
const customJestConfig = {
  setupFilesAfterEnv: [`<rootDir>/jest.setup.ts`],
  roots: [`<rootDir>/src`],
  moduleNameMapper: {
    '@/(.*)': `<rootDir>/src/$1`,
  },
  moduleDirectories: [`node_modules`, `src`],
  testEnvironment: `jest-environment-jsdom`,
};
module.exports = createJestConfig(customJestConfig);
export {};
//   "jest": {
//     "modulePaths": [
//       "<rootDir>/src/"
//     ],
//     "moduleNameMapper": {
//       "@/(.*)": "<rootDir>/src/$1"
//     }
//   },
