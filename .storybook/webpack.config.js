const path = require('path');

module.exports = ({ config }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, '../'),
    atoms: path.resolve(__dirname, '../components/atoms'),
    molecules: path.resolve(__dirname, '../components/molecules'),
    organisms: path.resolve(__dirname, '../components/organisms'),
    helpers: path.resolve(__dirname, '../helpers'),
    hocs: path.resolve(__dirname, '../hocs'),
  };

  return config;
};
