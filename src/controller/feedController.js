import express from 'express';
import { findProfileById } from '../service/profileService.js';

export const getFeed = async (req, res) => {
  try {
    const { id } = req.params;

    const profile = await findProfileById(id);

    const feed = await getPostList(profile.following);

    res.status(200).send(feed);
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