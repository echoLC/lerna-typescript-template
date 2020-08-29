module.exports = {
  extends: ['standard-with-typescript', 'standard-react'],
  plugins: ['typescript-eslint'],
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "jsx-quotes": ["error", "prefer-double"],
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-non-null-assertion": "off"
  }
}
