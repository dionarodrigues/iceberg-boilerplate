![android-chrome-192x192](https://cloud.githubusercontent.com/assets/1757632/14230808/2d8d5094-f93e-11e5-8a73-f9b894fa57df.png)
# Iceberg Simple Boilerplate
[![license](https://img.shields.io/github/license/diogorodrigues/iceberg-boilerplate.svg)](./license.md)
A simple boilerplate using Gulp, Pug(formerly Jade), Stylus and Browsersync.
For grid system uses Jeet with some help from Kouto Swiss for animations, and rupture for responsive utilities.

Maybe you want to read about them:

- [NPM Scripts](https://docs.npmjs.com/misc/scripts)
- [Gulp](http://gulpjs.com/)
- [Pug](https://pugjs.org/)
- [Stylus](http://stylus-lang.com/)
- [Browsersync](https://www.browsersync.io/)

## Getting Started
First of all, you need to have installed [Node.js](https://nodejs.org/en/) and [Gulp](http://gulpjs.com/).

Then you need to install the dependencies to run this boilerplate:

```sh
# Clone this repository
$ git clone https://github.com/diogorodrigues/iceberg-boilerplate.git
$ cd iceberg-boilerplate

# install dependencies
$ npm install

# or for install dependencies and build
$ npm run setup
```

## Folders and Files

```sh
├── README.md
├── build
│   ├── assets
│   │   ├── css
│   │   │   └── main.css
│   │   │   ├── fonts
│   │   ├── img
│   │   ├── js
│   │   │   ├── modules/*.js
│   │   │   ├── main.js
│   ├── index.html
├── gulpfile.js
├── package.json
└── src
    ├── fonts/
    ├── img/
    ├── js/
    ├── styl
    │   ├── _settings/*.styl
    │   ├── _base/*.styl
    │   ├── atoms/*.styl
    │   ├── molecules/*.styl
    │   ├── organisms/*.styl
    │   ├── pages/*.styl
    │   └── main.styl
    └── views
```

## Main Tasks
- npm run start: run all tasks and initialize watch for changes and a server
- npm run test: lint javascript
- npm run setup: lint javascript
- npm run build: run all tasks to build
- npm run html: compile pug files
- npm run js: compile js files
- npm run css: compile stylus files
- npm run fonts: move fonts files
- npm run img: compress image files
- npm run clean: deletes all the contents of the folder "assets"

## Code Standards
This project uses [eslint](https://eslint.org/) with [airbnb preset](https://github.com/airbnb/javascript). [.editorconfig](http://editorconfig.org/) is defined to have indent_size of 2 spaces.

This project also uses [Husky](https://github.com/typicode/husky) to prevent commit and push messy and wrong code. If you don't want this, you can uninstall running `npm uninstall --save-dev husky` and deleting the [precommit command](https://github.com/diogorodrigues/iceberg-boilerplate/blob/master/package.json#L13) on `package.json`.

## License
[MIT License](https://diogorodrigues.mit-license.org/)

© 2016 [Diogo Rodrigues](https://twitter.com/_diogorodrigues)



