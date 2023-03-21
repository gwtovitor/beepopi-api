import { Post } from "../model/Post.js";

export function findAllPost() {
  return Post.find();
}

export function findPostById(id) {
  return Post.findById(id);
}

export function findPostByUser(userId) {
  console.log(userId)
  return Post.find({ user: userId });
}

export function createPost(post) {
  return Post.create(post);
}