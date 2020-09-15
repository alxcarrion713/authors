const Author = require("mongoose").model("Author");
// var moment = require("moment");

module.exports = {
  allAuthors: function(req, res) {
    Author.find()
      .sort({name: 1})
      .then(authors => {
        console.log(authors);
        res.json({ authors: authors });
      })
      .catch(err => res.json(err));
  },
  oneAuthor: function (req, res) {
    console.log("one author id: " + req.params.id);
    Author.findOne({ _id: req.params.id })
      .then(author => res.json(author))
      .catch(err => {
        console.log("We have an error!", err);
        for (var key in err.errors) {
          req.flash("selected_author", err.errors[key].message);
        }
        res.json(err);
      });
  },
  create: function(req, res) {
    const author = new Author(req.body);
    author
      .save()
      .then(author => res.json(author))
      .catch(err => {
        console.log("We have an error!", err);
        for (var key in err.errors) {
          req.flash("new_author", err.errors[key].message);
        }
        res.json(err);
      });
  },
  update: function(req, res) {
    console.log("update author id: " + req.params.id);
    req.body.updated_at = Date.now();
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true })
      .then(author => res.json(author))
      .catch(err => {
        console.log("We have an error!", err);
        for (var key in err.errors) {
          req.flash("update_author", err.errors[key].message);
        }
        res.json(err);
      });
  },
  delete: function(req, res) {
    console.log("author id: " + req.params.id);
    Author.deleteOne({ _id: req.params.id })
      .then(() => res.json({ message: "Success" }))
      .catch(err => res.json(err));
  }
};