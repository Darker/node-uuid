# uuid example Browser with rollup.js

```
npm install
npm test
```

Then navigate to `example.html`.

The `example-v{1,4}.js` demonstrate that treeshaking works as expected:

```
$ du -sh dist/*
 20K  dist/all.js
8.0K  dist/v1.js
4.0K  dist/v4.js
```
