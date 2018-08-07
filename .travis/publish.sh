#!/bin/bash
echo $TRAVIS_PULL_REQUEST
echo $TRAVIS_BRANCH
if [ $TRAVIS_PULL_REQUEST == false ] && [ $TRAVIS_BRANCH == "master" ];
    then
        echo "Publishing package to npm";
        cd dist/lib
        echo "//registry.npmjs.org/:_authToken=\${NPM_TOKEN}" > .npmrc
        npm publish
        echo "Package successfully published to npm"
    else
        echo "Publishing package to npm failed"
    exit 1
fi