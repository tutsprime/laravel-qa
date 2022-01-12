let mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/app.js", "public/js")
    .vue({
        version: 2,
    })
    // .copy("node_modules/prismjs/themes", "public/css/prismjs-themes")
    .copy("node_modules/highlight.js/styles", "public/css/hljs-themes")
    .sass("resources/sass/app.scss", "public/css");
