module.exports = function (config) {
    config.set({
        files: [
            "src/**/*.tsx",
            "test/**/*.tsx"
        ],
        testRunner: "jest",
        reporter: ["html", "clear-text", "progress"],
        coverageAnalysis: "off",
        mutate: ["src/**/*.tsx"],
        mutator: 'typescript',
        transpilers: ["typescript"],
        tsconfigFile: "tsconfig.json",
        thresholds: {
            high: 80,
            low: 60,
            break: 80, // Fail if mutation score < 80
        }
    });
};
