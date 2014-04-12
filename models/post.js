module.exports = function (mongoose, genId) {
  return mongoose.model('Post', new mongoose.Schema({
    _id: {
      type: String,
      default: genId
    },

    slug: String,
    
    title: String,

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
