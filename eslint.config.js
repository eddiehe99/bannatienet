const {
    defineConfig,
    globalIgnores,
} = require("eslint/config");

const tsParser = require("@typescript-eslint/parser");
const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([{
    languageOptions: {
        parser: tsParser,

        globals: {
            Atomics: "readonly",
            SharedArrayBuffer: "readonly",
        },

        ecmaVersion: 2020,
        sourceType: "module",

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
    },

    extends: compat.extends(
        "next",
        "next/core-web-vitals",
        "next/typescript",
        "plugin:mdx/recommended",
        "plugin:prettier/recommended",
    ),

    settings: {
        react: {
            version: "detect",
        },
    },

    rules: {},
}, globalIgnores(["src/components/ui/**/*.ts", "src/components/ui/**/*.tsx"]), {
    files: ["**/*.tsx", "**/*.mdx"],

    rules: {
        "react/prop-types": "off",
    },
}]);
