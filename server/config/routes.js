var authorsController = require("../controllers/authors.js");
const path = require("path");
module.exports = function(app) {
  // Get all authors
  app.get("/authors", authorsController.allAuthors);
  //Get one author
  app.get("/authors/:id", authorsController.oneAuthor)
  //Create new Author
  app.post("/authors", authorsController.create);
  //Edit one author
  app.put("/authors/:id", authorsController.update);
  //Delete one author
  app.delete("/authors/:id", authorsController.delete);
  //Default route
  app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"));
  });
};