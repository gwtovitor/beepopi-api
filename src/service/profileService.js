import { Profile } from "../model/Profile.js";

export function findAllProfile() {
  return Profile.find();
}

export function findProfileById(id) {
  return Profile.findById(id);
}

export function findProfileByUser(userId) {
  return Profile.findOne({ user: userId });
}

export function findProfileByName(data) {
  return Profile.findOne({ firstName: data });
}

export function createProfile(profile) {
  return Profile.create(profile);
}

export function updateProfile(id, profile) {
  return Profile.findOneAndUpdate({ _id: id }, profile);
}

export function deleteProfile(id) {
  return Profile.findOneAndDelete(id);
}
