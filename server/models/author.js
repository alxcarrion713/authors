const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A name is required for this author"],
      minlength: [3,"The author's name must be at least 3 characters long"]
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

mongoose.model("Author", AuthorSchema);