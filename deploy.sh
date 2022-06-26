#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd demo/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git add -A
git commit -m 'feat: bump version 1.0.0'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:polmoneys/boost.git
unicorn:gh-pages

cd -