const { User, Book } = require('../models');

const resolvers = {
  Query: {
    getSingleUser: async (parent, { user = null, params }) => {
      return await User.findOne({
        $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
      });
    },
  },

  Mutation: {
    createUser: async ({ body }, res) => {
      const user = await User.create(body);
      const token = signToken(user);
      return { token, user };
    },
  }
};

module.exports = resolvers;
