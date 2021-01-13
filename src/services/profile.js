const Profile = require('../models/Profile');
const { v4: uuid } = require('uuid');

module.exports = profile = {
  getProfile: async () => {
    try {
      const profile = await Profile.find();
      if (!profile)
        throw {
          status: 404,
          message: 'Profile is empty',
        };
      return {
        status: 200,
        success: true,
        message: 'Get profile success',
        data: profile,
      };
    } catch (error) {
      return {
        status: error.status ? error.status : 500,
        success: false,
        message: error.message ? error.message : 'Internal server error',
      };
    }
  },
  getProfileById: async (id) => {
    try {
      const profile = await Profile.findOne({ profileId: id });
      if (!profile)
        throw {
          status: 404,
          message: 'Profile not found',
        };
      return {
        status: 200,
        success: true,
        message: 'Get profile success',
        data: profile,
      };
    } catch (error) {
      return {
        status: error.status ? error.status : 500,
        success: false,
        message: error.message ? error.message : 'Internal server error',
      };
    }
  },
  addProfile: async (data) => {
    try {
      const profile = await Profile.create({
        profileId: uuid(),
        noAbsen: data.noAbsen,
        namaLengkap: data.namaLengkap,
        kelas: data.kelas,
      });
      if (!profile)
        throw {
          status: 400,
          message: 'Cant create profile',
        };

      return {
        status: 201,
        success: true,
        message: 'Add Profile success',
        data: profile,
      };
    } catch (error) {
      return {
        status: error.status ? error.status : 500,
        success: false,
        message: error.message ? error.message : 'Internal server error',
      };
    }
  },
  editProfile: async (id, data) => {
    try {
      const profile = await Profile.updateOne(
        { profileId: id },
        {
          noAbsen: data.noAbsen,
          namaLengkap: data.namaLengkap,
          kelas: data.kelas,
        }
      );
      if (!profile) {
        throw {
          status: 404,
          message: 'Profile not found',
        };
      } else {
        return {
          status: 200,
          success: true,
          message: 'Update Profile Success',
        };
      }
    } catch (error) {
      return {
        status: error.status ? error.status : 500,
        success: false,
        message: error.message ? error.message : 'Internal server error',
      };
    }
  },
  deleteProfile: async (id) => {
    try {
      const profile = await Profile.deleteOne({ profileId: id });
      if (!profile) {
        throw {
          status: 404,
          message: 'Profile not found',
        };
      } else {
        return {
          status: 200,
          success: true,
          message: 'Delete Profile Success',
        };
      }
    } catch (error) {
      return {
        status: error.status ? error.status : 500,
        success: false,
        message: error.message ? error.message : 'Internal server error',
      };
    }
  },
};
