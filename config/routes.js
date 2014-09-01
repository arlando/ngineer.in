module.exports = function (app) {
    //generic error handler
    app.use(function(err, req, res, next) {
        console.log('Error: ' + Date());
        console.trace(err);
        res.status(500).send(err);
        next();
    });
};