var models = require('../models');
var post = module.exports = {};

var Post = models.Post;

post.create = function (req, res) {
  if (!req.author) {
    res.send(403);
    return;
  }

  var newpost = new Post();
  
  newpost.title = req.body.title;
  newpost.content = req.body.content;
  newpost.slug = req.body.slug;

  newpost.save(function (err) {
    if (err) {
      res.send({
        error: err
      });
      return;
    }
    res.send({
      success: true,
      post: newpost
    });
  });
};

post.delete = function (req, res) {
  if (!req.author) {
    res.send(403);
    return;
  }

  var error = function (err) {
    if (err) {
      res.send({
        error: err
      });
      return true;
    }
  };

  Post.findOne({ _id: req.body.id }, function (err, target) {
    if (error(err)) {
      return;
    }
    target.remove(function (err) {
      if (error(err)) {
        return;
      }
      res.send({
        success: true,
        post: target
      });
    });
  });
};
