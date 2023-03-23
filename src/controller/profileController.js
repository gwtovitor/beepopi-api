import { createProfile, deleteProfile, findAllProfile, updateProfile } from '../service/profileService.js';

export async function findAll(req, res) {
  try {
    const profiles = await findAllProfile();

    res.send(profiles);
  } catch (error) {
    res.status(500).send({ message: error });
  }
}

export async function create(req, res) {
  try {
    // const profile = await createProfile(req.body);

    console.log(req.files)

    res.status(201).send();
  } catch (error) {
    res.status(500).send({ message: error });
  }
}

export async function update(req, res) {
  try {
    const profile = await updateProfile(req.params.id, req.body);

    res.status(200).send({ message: "Profile has been updated." });
  } catch (error) {
    res.status(500).send({ message: error });
  }
}

export async function del(req, res) {
  try {
    const profile = await deleteProfile(req.params.id);

    res.status(200).send({ message: "Profile has been deleted." });
  } catch (error) {
    res.status(500).send({ message: error });
  }
}