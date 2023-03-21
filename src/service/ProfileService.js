import { Profile } from "../model/Profile.js";

export function findAllProfile() {
  return Profile.find();
}

export function findProfileById(id) {
  return Profile.findById(id);
}

export function findProfileByUser(userId) {
  return Profile.findOne(userId);
}

export function createProfile(profile) {
  return Profile.create(profile);
}