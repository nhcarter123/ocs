const path = require('path');

module.exports = {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  paths: function (paths) {
    paths.appIndexJs = path.resolve(__dirname, 'src/frontend/index.tsx');
    return paths;
  }
};
