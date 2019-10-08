#!/bin/bash

VERSION=$(node -p "require('./package.json').version")

if [[ $TRAVIS_COMMIT_MESSAGE =~ ^release ]]; then
  echo -n 'release commit: creating release docs ... '
  mkdir -p docs/releases/$VERSION
  ls docs/ | grep -v releases | xargs -I{} cp -r docs/{} docs/releases/$VERSION
  echo 'done.'
fi


if [[ $TRAVIS_BRANCH == alpha ]]; then
  echo -n 'branch alpha: creating alpha docs ... '
  mkdir docs/$VERSION
  ls docs/ | grep -v -e releases -e $VERSION | xargs -I{} mv docs/{} docs/$VERSION
  echo 'done.'
fi

# checkout current gh-poages branch and add new docs
echo 'creating gh-pages folder ...'
mkdir gh-pages
echo 'checking out gh-pages branch ...'
git clone -b gh-pages --single-branch https://github.com/$TRAVIS_REPO_SLUG gh-pages
echo 'adding new documents ...'
cp -r docs/* gh-pages
echo 'done.'
