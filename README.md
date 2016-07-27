![android-chrome-192x192](https://cloud.githubusercontent.com/assets/1757632/14230808/2d8d5094-f93e-11e5-8a73-f9b894fa57df.png)
# Iceberg Simple Boilerplate
A simple boilerplate using Gulp, Jade, Stylus and Browsersync.
For grid system uses Jeet with some help from Kouto Swiss for animations, and rupture for responsive utilities.

Maybe you want to read about them:

- [Gulp](http://gulpjs.com/)
- [Jade](http://jade-lang.com/)
- [Stylus](http://stylus-lang.com/)
- [Browsersync](https://www.browsersync.io/)

## Getting Started
First of all, you need to have installed [Node.js](https://nodejs.org/en/) and [Gulp](http://gulpjs.com/).

Then you need to install the dependencies to run this boilerplate:

```
> # Clone this repository
> $ git clone https://github.com/diogorodrigues/iceberg-boilerplate.git
> $ cd iceberg-boilerplate
> 
> # install dependencies
> $ npm install
```

## Folders and Files

```sh
├── README.md
├── deploy
│   ├── assets
│   │   ├── css 
│   │   │   └── main.css
│   │   │   ├── fonts
│   │   ├── img
│   │   ├── js 
│   │   │   └── main.js
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
- gulp: run all tasks and initialize watch for changes and a server
- gulp jade: compile jade files
- gulp js: execute js files
- gulp css: compile stylus files
- gulp fonts: move fonts files
- gulp img: compress image files
- gulp clean: deletes all the contents of the folder "assets"
- gulp deploy: run all tasks but not initialize watch for changes and a server
 
## License
MIT License

© 2016 [Diogo Rodrigues](https://twitter.com/_diogorodrigues)



