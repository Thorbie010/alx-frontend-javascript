import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);

    return {
      photo: photo,
      user: user,
    };
  } catch (error) {
    // If an error occurs in either uploadPhoto or createUser, return an empty object
    return {
      photo: null,
      user: null,
    };
  }
}