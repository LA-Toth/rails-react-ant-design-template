module.exports = {
  env: {
    browser: true,
    "jest/globals": true
  },
  extends: [
    "standard",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["typescript", "immutable", "jest"],
  rules: {
    "immutable/no-mutation": "error",
    "jest/no-disabled-tests": "error",
    "react/no-unused-prop-types": "off",
    "react/jsx-no-bind": ["error", {ignoreRefs: true}],
    "react/no-deprecated": "error",
    "react/jsx-handler-names": "off",
    "no-prototype-builtins": "off",
    "react/jsx-no-target-blank": "off",
    "no-unused-vars": "off",
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
