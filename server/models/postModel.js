const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    category: {
      type: String,
      enum: [
        "Aggriculture",
        "Bussiness",
        "Entertainment",
        "Health",
        "Technology",
        "Sports",
        "Art",
        "Others",
      ],
      message: "{VALUE} is not supported",
    },
    description: { type: String, required: true },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const PostModel = mongoose.model("post", postSchema);

module.exports = {
  PostModel,
};
