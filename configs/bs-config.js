" use strict";
module.exports = {
    "port": 3000,
    "files": [
        "./app/**/*.{html,htm}",
        "./assets/**/*.{css,js}"
    ],
    "browser" : ["chrome"],

    "server": {
        "baseDir": "./app"
    }
};