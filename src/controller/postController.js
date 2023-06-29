import { createPost, deletePost, findAllPost, findPostById, findPostByUser, updatePost } from '../service/postService.js';

export async function findAll(req, res) {
  try {
    const posts = await findAllPost();

    res.status(200).send(posts);
  } catch (err) {
    res.status(500).send({ message: err.toString() });
  }
}

export async function findByUser(req, res) {
  const { id } = req.params;
  const { logado } = req.headers;
  
  if (logado == id) {
    const logPosts = await findPostByUser(id);
    console.log(logPosts.length)

    return res.send(logPosts);
  }

  const posts = verificaPrivado(await findPostByUser(id));
  console.log(posts.length)

  res.send(posts);
}

export async function findById(req, res) {
  const post = await findPostById(req.params.id);

  res.send(post);
}

export async function create(req, res) {
  const post = await createPost(req.body);

  res.status(201).send(post);
}

// * verificar
export async function update(req, res) {
  try {
    const { id } = req.params

    console.log(id, req.body)

    const post = await updatePost(id, req.body);

    res.status(201).send({ message: "Post has been updated." });
  } catch (error) {
    res.status(500).send({ message: error });
  }
}

export async function del(req, res) {
  try {
    const { id } = req.params;

    const post = await deletePost(id);

    res.status(201).send({ message: "Post has been deleted." });
  } catch (error) {
    res.status(500).send({ message: error });
  }
}

const verificaPrivado = (posts) => {
  const list = [];

  posts.map(post => {
    if (post && !post.privado) {
      list.push(post);
    }
  });

  return list;
}