
// 参考 [auth](https://github.com/expressjs/express/blob/master/examples/auth/index.js)


app.get('/logout', function(req, res){
    // destroy the user's session to log them out
    // will be re-created next request
    req.session.destroy(function(){
        res.redirect('/');
    });
});