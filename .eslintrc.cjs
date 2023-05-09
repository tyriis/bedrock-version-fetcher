/* eslint-env node */
module.exports = {
  extends: ["eslint:recommended", "prettier"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 13,
  },
  rules: {
    "object-curly-spacing": ["warn", "always"],
    "no-console": "warn",
  },
  globals: { fetch: false, console: false, process: false },
}
