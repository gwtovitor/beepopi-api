import profileService from '../service/profileService.js';

const find = (req, res) => {
  try {
    const profile = profileService.find(req.params.id);

    res.send(profile);
  } catch (error) {

  }
}

export default {
  find
};