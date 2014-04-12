module.exports = function (authors) {
  return function (req, res, next) {
    req.checkAuthorPassword = checkAuthorPassword;
    if (req.session.author) {
      req.author = authors[req.session.author];
      if (!req.author) {
        req.session = null;
      }
    }
    next();
  };

  function checkAuthorPassword(author, password) {
    author = authors[author];
    return !!(author && author.password === password);
  }
};
