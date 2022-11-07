module.exports = {
  verbose: true,
  moduleFileExtensions: ["js"],
  moduleDirectories: ["node_modules", "src"],
  testEnvironment: 'node',
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  }
};
