module.exports = function (config) {
  config.set({
    files: [
      "src/**/*.tsx",
      "src/**/*.ts",
      "test/**/*.tsx",
      "test/**/*.ts"
    ],
    testRunner: "jest",
    reporter: ["html", "clear-text", "progress"],
    coverageAnalysis: "off",
    mutate: ["src/**/*.tsx", "src/**/*.ts"],
    mutator: 'typescript',
    transpilers: ["typescript"],
    tsconfigFile: "tsconfig.json",
    thresholds: {
      high: 80,
      low: 60,
      break: 80, // Fail if mutation score < 80
    },
    timeoutMs: 10000,
    maxConcurrentTestRunners: 5
  });
};
