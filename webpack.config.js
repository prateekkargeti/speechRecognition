// This is a node script

// We are importing a package to create path with concatenation etc.
const path = require('path');

// Loading the package.json into pkg
const pkg = require('./package');

// To make synchronous copy of files since the native fs is asynchronous
const fs = require('fs-extra');

// get module name and dist folder from package.json
const moduleName = pkg.name;
const distFolder = pkg.distFolder;

// copy info file in dist folder
fs.copySync(moduleName + '.info', path.join(__dirname, distFolder, moduleName + '.info'));

// webpack rules
module.exports = {
    entry: './app/entryPoint.ts',
    output: {
        path: path.join(__dirname, distFolder, moduleName),
        filename: 'index.js'
    },
    devtool : 'source-map',
    resolve: {
        extensions: ['.ts', '.less']
    },
    externals: [
        // ionweb and angular will not to be bundled with the current module.
        // The reason we don't bundle is that these libraries will be downloaded once from the ION.WEB Server and shared across all the modules downloaded from the same web browser.
        // other libraries are also bundled with ionweb : Bootstrap, Q, jQuery, CometD, Dojo and GridX, RequireJS, AMD

        // since angular will add its instance to the window object, require('angular') occurrencies will be translated to the angular object instance by bundling.
        'angular',

         // since ionweb will be added to the window object, require('ionweb') occurrencies will be translated to the ionweb object instance by bundling.
       'ionweb'
    ],
    module: {
        loaders: [
           //ts-loader is used to compile all ts to javascript
           { test: /\.ts$/, use: 'ts-loader' },
           //raw-loader is used to compile all tpl.html to javascript
           { test: /\.tpl.html$/, use: ['raw-loader'] }
        ]
    }
};
