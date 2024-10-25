import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import preact from "@notwoods/eslint-config-preact";
import pluginQuery from '@tanstack/eslint-plugin-query'


export default [
  // base
  {files: ["**/*.{ts,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  // prettier
  eslintConfigPrettier,
  // preact
  preact.configs.base,
  ...preact.configs.recommended,
  // tanstack-query
  ...pluginQuery.configs['flat/recommended'],
  {
    rules: {
      "react/prop-types": "off"
    }
  }
];