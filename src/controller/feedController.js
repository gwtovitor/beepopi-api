import express from 'express';
import { findProfileById } from '../service/profileService.js';
import { Post } from '../model/Post.js';

export const getFeed = async (req, res) => {
  try {
    const { id } = req.params;
    const posts = [];

    const profile = await findProfileById(id);

    const feed = await getPostList(profile.following);


    if (feed.length > 0) {
      for (let i = 0; i < feed.length; i++) {
        const postObj = await Post.findById(feed[i]);

        if (postObj && !postObj.privado && !posts.includes(feed[i])) {
          posts.push(feed[i]);
        }
      }
    }

  
    res.status(200).send(posts);
  } catch (err) {
    res.status(500).send({ message: err.toString() });
  }
}

async function getPostList(flwing) {
  let posts = [];

  for (let i = 0; i < flwing.length; i++) {
    const profile = await findProfileById(flwing[i]);
    if (profile.posts.length > 0) {
      posts = posts.concat(profile.posts);
    }
  }

  return posts;
}