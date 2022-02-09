module.exports = {
  extends: 'airbnb',
  plugins: ['react'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: {
    React: true,
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    semi: ['error', 'never'],
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': ['warn', { aspects: ['invalidHref'] }],
  },
  settings: {
    // These packages are provided 'magically' by Gatsby
    'import/core-modules': ['react', 'config', 'prop-types', 'react-helmet'],
  },
}
