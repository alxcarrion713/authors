const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
mongoose.connect("mongodb://localhost/authors", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

require("../models/author")