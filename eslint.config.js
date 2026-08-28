import { globalIgnores } from "eslint/config";
import js from "@eslint/js";

export default [
  globalIgnores([".next/"]),

  {
    files: ["**/*.js"],
    ...js.configs.recommended,
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },
];
