export default [
  {
    files: ["**/*.js"], // This line specifies that the ESLint configuration applies to all JavaScript files in the project.
    rules: {
      semi: "error",
      "no-unused-vars": "warn",
    },
  },
];
