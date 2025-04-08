import eslint from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tseslintParser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default [
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tseslintParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      prettier: prettier,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      ...eslint.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      "prettier/prettier": "error",
      "@typescript-eslint/explicit-function-return-type": "warn",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "warn",
      "max-len": ["error", { 
        "code": 80,
        "ignoreComments": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true
      }],
      "object-curly-newline": ["error", {
        "multiline": true,
        "consistent": true
      }],
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // Built-in types, node imports
            ["^node:", "^[a-z]"],
            // External packages
            ["^@?\\w"],
            // Internal packages
            ["^@/"],
            // Parent imports
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
            // Other relative imports
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          ],
        },
      ],
      "simple-import-sort/exports": "error",
    },
  },
];
