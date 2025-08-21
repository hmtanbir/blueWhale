// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*'],
  },
]);
// This file is used to configure ESLint for the project.
// It extends the Expo ESLint configuration and ignores the 'dist' directory.
// The configuration is defined using the `defineConfig` function from 'eslint/config'.
// The Expo ESLint configuration is imported from 'eslint-config-expo/flat'.
// The module exports an array containing the Expo configuration and an object that specifies the ignored files.
// This setup helps maintain code quality and consistency across the project by enforcing linting rules defined in the Expo configuration.
// The 'dist' directory is ignored to prevent linting of built files, which are not part of the source code and can contain generated content that does not need to be linted.
// This configuration file is essential for ensuring that the code adheres to the standards set by the Expo team, making it easier to maintain and collaborate on the project.
// It is typically placed at the root of the project directory, allowing ESLint to automatically pick it up when running linting commands.
//// Developers can customize this configuration further by adding additional rules or plugins as needed for their specific project requirements.
// For more information on configuring ESLint, refer to the official ESLint documentation.
// This file is essential for maintaining code quality and consistency in the project.          