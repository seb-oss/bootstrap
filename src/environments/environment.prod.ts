export const environment = {
  production: true,
  version: (() => {
      let version = '';
      try {version = require('../../dist/lib/package.json').version; } catch (e) {version = 'n/a'; }
      return version;
  })(),
  travis_build_number: '$TRAVIS_BUILD_NUMBER'
};
