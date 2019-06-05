import {SERVER_URL} from "./config";

const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(proxy('/api',
        {target: SERVER_URL, changeOrigin: true}
    ));
};