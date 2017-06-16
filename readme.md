
# clean-git

<p align="center">
  <i>Find all git repos that are not 'clean'</i>
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/clean-git"><img src="https://img.shields.io/npm/dt/clean-git.svg" /></a>
</p>

## Install

```bash
npm install --save clean-git
```

## Usage

Works with the same options as [find-repos](https://github.com/pablopunk/find-repos)

```js
const cleanGit = require('clean-git')
cleanGit({ baseDir: '~', maxDepth: '2', ignores: ['node_modules'] })
.then(console.log)
/* =>
[ '/Users/pablopunk/repos/bashy',
  '/Users/pablopunk/repos/hyper',
  '/Users/pablopunk/www/gmaps', ]
*/
```

## Contribute

Feel free to open an _issue_ or a _PR_.

## License

[__MIT license__](license)

## Author

| ![me](https://www.gravatar.com/avatar/fa50aeff0ddd6e63273a068b04353d9d?s=100)|
| -----------------------------------------------------------------------------|
| © 2017 [__Pablo Varela__](http://pablo.life)                                 |

