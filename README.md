![android-chrome-192x192](https://cloud.githubusercontent.com/assets/1757632/14230808/2d8d5094-f93e-11e5-8a73-f9b894fa57df.png)
# Iceberg Simple Boilerplate

[![license](https://img.shields.io/github/license/diogorodrigues/iceberg-boilerplate.svg)](./license.md)

A simple boilerplate using Gulp, Pug (formerly Jade), Stylus and Browsersync and more to start projects quickly.  

- [Gulp](http://gulpjs.com/)
- [Pug](https://pugjs.org/)
- [Stylus](http://stylus-lang.com/)
- [Jeet](http://jeet.gs/) - grid system for CSS
- [Rupture](http://jescalan.github.io/rupture/) - simple media queries for stylus
- [Rucksack](https://www.rucksackcss.org/) - a little bag of CSS superpowers
- [Browsersync](https://www.browsersync.io/) - for live reloading and static server
- [Babel](https://babeljs.io/) - the compiler for using ES6
- [ESLint](https://eslint.org/) - for JavaScript linting
- CSS / JS Sourcemaps
- Optimizes IMGs

## Getting Started

### Dependencies
Make sure these are installed first.

- [Node.js](https://nodejs.org/en/) 
- [Gulp](http://gulpjs.com/) `sudo npm install -g gulp`

### Quick Start
Then you need to install the dependencies to run this boilerplate:

```sh
$ git clone https://github.com/diogorodrigues/iceberg-boilerplate.git
$ cd iceberg-boilerplate

$ npm install       # install dependencies
$ npm run setup     # or for install dependencies and build
```

## File Structure

```sh
iceberg-boilerplate

├── build
│   ├── assets
│   │   ├── css
│   │   │   └── main.css
│   │   │   ├── fonts
│   │   ├── img/
│   │   ├── js
│   │   │   ├── modules/*.js
│   │   │   ├── main.js
│   ├── index.html
├── src
│   ├── fonts/
│   ├── img/
│   ├── js/
│   ├── styl
│   │   ├── _settings/*.styl
│   │   ├── _base/*.styl
│   │   ├── atoms/*.styl
│   │   ├── molecules/*.styl
│   │   ├── organisms/*.styl
│   │   ├── pages/*.styl
│   │   └── main.styl
│   └── views
├── gulpfile.js
├── package.json
├── .editorconfig
├── .eslintrc.json
├── .gitignore
├── CONTRIBUTING.md
├── LICENSE.md
├── README.md
```

## Tasks

### Main Tasks

- `npm run start` - run all tasks and initialize watch for changes and a server
- `npm run test` - lint javascript
- `npm run setup` - lint javascript
- `npm run build` - run all tasks to build

### Other Tasks

- `npm run html` - compile pug files
- `npm run js` - compile js files
- `npm run css` - compile stylus files
- `npm run fonts` - move fonts files
- `npm run img` - compress image files
- `npm run clean` - deletes all the contents of the folder 'builder'

Maybe you want to read about [NPM Scripts](https://docs.npmjs.com/misc/scripts).

## Code Standards
This project uses [eslint](https://eslint.org/) with [airbnb preset](https://github.com/airbnb/javascript). [.editorconfig](http://editorconfig.org/) is defined to have indent_size of 2 spaces.

This project also uses [Husky](https://github.com/typicode/husky) to prevent commit and push messy and wrong code. If you don't want this, you can uninstall running `npm uninstall --save-dev husky` and deleting the [precommit command](https://github.com/diogorodrigues/iceberg-boilerplate/blob/master/package.json#L13) on `package.json`.

## How to Contribute
Please review the [contributing file](https://github.com/diogorodrigues/iceberg-boilerplate/blob/master/CONTRIBUTING.md).

## License
[MIT License](https://diogorodrigues.mit-license.org/) © [Diogo Rodrigues](https://twitter.com/_diogorodrigues)
