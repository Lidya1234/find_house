const proxy = require("http-proxy-middleware");

module.exports=function(app) {
    app.use(
        proxy("/login", {
    target: "https://findlidushouse.herokuapp.com",
    ChangeOrigin: true
        })
    );
};