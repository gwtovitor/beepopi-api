import { createPost, findAllPost, findPostByUser } from '../service/postService.js';

export async function findAll(req, res) {
  try {
    const posts = await findAllPost();

    res.status(200).send(posts);
  } catch (err) {
    res.status(500).send({ message: err.toString() });
  }
}

export async function findByUser(req, res) {
  const post = await findPostByUser(req.headers.userid);

  res.send(post);
}

export async function create(req, res) {
  const post = createPost(req.body);

  res.status(201).send({ message: "Post created" });
}