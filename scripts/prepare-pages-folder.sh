#!/bin/bash

echo "starting gh-pages creation ..."
VERSION=$(node -p "require('./package.json').version")

# checkout current gh-pages branch
echo -n "checking out - https://github.com/$TRAVIS_REPO_SLUG gh-pages branch ... "
git clone -b gh-pages --single-branch https://github.com/$TRAVIS_REPO_SLUG gh-pages
echo "done"

echo -n "ensuring folders exist... "
mkdir -p gh-pages/releases gh-pages/alpha gh-pages/master
echo "done"

# create release documentation and move to gh-pages/releases/x.x.x
if [[ $TRAVIS_COMMIT_MESSAGE =~ ^release ]]; then
  echo -n "release commit - creating release docs for version $VERSION ... "
  rsync -r --delete ./docs/ gh-pages/releases/$VERSION
  node "./scripts/addNewVersion.js"
  if [[ $TRAVIS_BRANCH == master ]]; then
    node "./scripts/rewriteIndex.js"
  fi
  echo "done."
fi

# create alpha documentation and move it to gh-pages/alpha
if [[ $TRAVIS_BRANCH == alpha ]]; then
  echo -n "branch alpha - creating alpha docs ... "
  rsync -r --delete ./docs/ gh-pages/alpha/
  echo "done."
fi

# create master documentation and move it to gh-pages/master
if [[ $TRAVIS_BRANCH == master ]]; then
  echo -n "branch master - creating master docs ... "
  rsync -r --delete ./docs/ gh-pages/master/
  echo "done."
fi

echo "gh-pages creation ... done."
