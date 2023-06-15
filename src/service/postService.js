import { Post } from "../model/Post.js";

//nunca usar
export function findAllPost() {
  return Post.find();
}

export function findPostById(id) {
  return Post.findById(id);
}

export function findPostByUser(userId) {
  return Post.find({ user: userId });
}

export function createPost(post) {
  return Post.create(post);
}

export function updatePost(id, post) {
  return Post.findByIdAndUpdate(id, post);
}

export function deletePost(id) {
  return Post.findByIdAndDelete(id);
}