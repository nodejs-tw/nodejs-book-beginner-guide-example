var authors = module.exports = {};

authors.login = function (req, res) {
  var pass = req.body.password;
  var login = req.body.login;

  if (req.checkAuthorPassword(login, pass)) {
    req.session.author = login;
    res.send({
      success: true
    });
  } else {
    res.send({
      error: {
        message: '帳號/密碼錯誤'
      }
    });
  }
};
