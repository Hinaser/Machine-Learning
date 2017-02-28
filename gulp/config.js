var environments = require('gulp-environments');
var argv = require("yargs").argv;

/**
 * Set default environment to 'production' to
 * prevent to show debugging information.
 */
var is_env_specified = function(){
    return process.env.NODE_ENV || argv.env;
};
if(!is_env_specified()){
    environments.current(environments.make('production'));
}

var tsconfig = {
    "compilerOptions": {
        "noImplicitAny": true,
        "noImplicitReturns": true,
        "target": "es5",
        "module": "commonjs",
        "removeComments": true,
        "typeRoots": ["./node_modules/@types"]
    },
    "exclude": [
        "node_modules"
    ]
};

var defaultConfig = {
    "js": {
        "srcDir": "src/javascript",
        "destDir": "docs/js",
        "compress": true,
        "sourcemaps": false,
        "libDir": 'src/javascript/lib',
        "rawDir": 'src/javascript/raw',
        "tsconfig": tsconfig
    },
    "stylesheet": {
        "srcDir": "src/stylesheet",
        "destDir": "docs/css",
        "compress": true,
        "sourcemaps": false,
        "libDir": 'src/stylesheet/lib',
        "rawDir": 'src/stylesheet/raw'
    },
    "image": {
        "srcDir": "src/image",
        "destDir": "docs/image"
    },
    "html": {
        "srcDir": "src/html",
        "destDir": "docs",
        "rawDir": "src/html/raw",
        "pretty": false
    },
    "environment": ""
};

var clone = function(obj){
    return JSON.parse(JSON.stringify(obj));
};

var config = {
    "production": clone(defaultConfig),
    "development": clone(defaultConfig)
};

config["development"]["stylesheet"]["minify"] = false;
config["development"]["stylesheet"]["sourcemaps"] = true;
config["development"]["stylesheet"]["compress"] = false;
config["development"]["js"]["compress"] = false;
config["development"]["js"]["sourcemaps"] = true;
config["development"]["html"]["pretty"] = true;

var exports = config[environments.current().$name];
exports["environment"] = environments.current().$name;

module.exports = exports;
