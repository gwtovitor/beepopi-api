import { findAllProfile } from '../service/profileService.js';

export async function findAll(req, res) {
  try {
    const profiles = await findAllProfile();

    res.send(profiles);
  } catch (error) {

  }
}