git checkout -f main
git push
astro build
git checkout gh-pages
cp -r -f dist/* .
rm -r -f dist
git add .
git commit -m "build"
git pull
git push
git checkout -f main
