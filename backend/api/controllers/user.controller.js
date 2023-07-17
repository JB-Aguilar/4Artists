const bcrypt = require("bcrypt");
const { User } = require("../models/user.model");
const { Posts } = require("../models/post.model");
const { Like } = require("../models/like.model");

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send("Error: Users not found");
  }
};

const getOneUser = async (req, res) => {
  try {
    const users = await User.findByPk(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send("Error: User not found");
  }
};

const createLike = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.userId);
    const post = await Posts.findByPk(req.params.postId);
    if (!user || !post) {
      return res.status(404).json({ error: "User or post not found" });
    }

    const existingLike = await Like.findOne({
      where: { userId: user.id, postId: post.id },
    });
    if (existingLike) {
      await existingLike.destroy();
      return res.status(200).json({ message: "Like deleted successfully" });
    } else {
      const like = await Like.create({
        userId: user.id,
        postId: post.id,
      });
      return res.status(201).json({ message: "Like created" });
    }
  } catch (error) {
    console.error("Error creating like", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const SaveLikes = async (userId, postId) => {
  const likes = await GetLikes(userId);
  if (!likes) {
    likes = [];
  }

  if (likes.includes(postId)) {
    likes.splice(likes.indexOf(postId), 1);
  } else {
    likes.push(postId);
  }

  await SaveLikesInDB(likes);
};

module.exports = { getOneUser, getUsers, createLike, SaveLikes };
