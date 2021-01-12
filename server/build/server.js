"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_errors_1 = __importDefault(require("http-errors"));
var express_1 = __importDefault(require("express"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var morgan_1 = __importDefault(require("morgan"));
require('dotenv').config();
var apiKey = process.env.API_KEY;
var app = express_1.default();
var port = 8080;
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookie_parser_1.default());
app.set('view engine', 'html');
app.get('/api', function (req, res) {
    res.send("" + new Date());
});
// users
app.get('/api/users', function (req, res) {
    res.send(['Aang', 'Katara', 'Momo', 'Sokka', 'Appa']);
});
// articles
var headlineNews;
var NewsAPI = require('newsapi');
var newsapi = new NewsAPI(apiKey);
newsapi.v2.topHeadlines({
    sources: 'bbc-news, the-verge'
}).then(function (r) { return headlineNews = r; });
app.get('/api/top_headlines', function (req, res) {
    res.send(headlineNews.articles);
});
var allNews;
var everythingNews = new NewsAPI(apiKey);
everythingNews.v2.everything({
    sources: 'bbc-news, the-verge'
}).then(function (r) { return allNews = r; });
app.get('/api/all_news', function (req, res) {
    res.send(allNews.articles);
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(http_errors_1.default(404));
});
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: err,
    });
});
app.listen(port, function () {
    console.log("Listening at http://localhost:" + port);
});
//# sourceMappingURL=server.js.map