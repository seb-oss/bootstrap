export const environment = {
  production: true,
  version: require('../../dist/lib/package.json').version,
  travis_build_number: '__TRAVIS_BUILD_NUMBER__'
};
