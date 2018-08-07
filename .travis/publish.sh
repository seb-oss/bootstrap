#!/bin/bash
if [ $TRAVIS_PULL_REQUEST == false ] && [ $TRAVIS_BRANCH == "development" ]; then
    echo "Publishing package to npm";
    cd dist/lib
    _auth = $NPM_TOKEN > ~/.npmrc
    email = $NPM_EMAIL >> ~/.npmrc
    npm publish
    echo "Package successfully published to npm";
    else
    echo "Publishing package to npm failed";
    exit 1
fi