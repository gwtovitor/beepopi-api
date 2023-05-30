import { createProfile, deleteProfile, findAllProfile, updateProfile } from '../service/profileService.js';

export async function findAll(req, res) {
  try {
    const profiles = await findAllProfile();

    res.status(200).send(profiles);
  } catch (error) {
    res.status(500).send({ message: error.toString() });
  }
}

export async function findById(req, res) {
  try {
    const { id } = req.params;

    const profile = await findAllProfile();

    res.status(200).send(profile);
  } catch (error) {
    res.status(500).send({ message: error.toString() });
  }
}

export async function findByUser(req, res) {
  try {
    const { userId } = req.params;

    const profile = await findAllProfile();

    res.status(200).send(profile);
  } catch (error) {
    res.status(500).send({ message: error.toString() });
  }
}

export async function create(req, res) {
  try {
    const profile = await createProfile(req.body);

    res.status(201).send(profile);
  } catch (error) {
    res.status(500).send({ message: error.toString() });
  }
}

export async function update(req, res) {
  try {
    const profile = await updateProfile(req.params.id, req.body);

    res.status(200).send({ message: "Profile has been updated." });
  } catch (error) {
    res.status(500).send({ message: error.toString() });
  }
}

export async function del(req, res) {
  try {
    const profile = await deleteProfile(req.params.id);

    res.status(200).send({ message: "Profile has been deleted." });
  } catch (error) {
    res.status(500).send({ message: error.toString() });
  }
}