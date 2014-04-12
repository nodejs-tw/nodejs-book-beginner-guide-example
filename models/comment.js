module.exports = function (mongoose, genId) {
  return mongoose.model('Comment', new mongoose.Schema({
    _id: {
      type: String,
      default: genId
    },

    post: {
      type: String,
      ref: 'Post'
    },

    author: String,

    email: String,

    content: String,

    createdAt: {
      type: Date,
      default: Date.now
    },
    
    updatedAt: {
      type: Date,
      default: Date.now
    }
  }));
};
