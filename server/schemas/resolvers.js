const { Book, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
        if (context.user) {
            const userData = await User.findOne({ _id: context.user._id })
            .select('-__v -password')
            return userData;
        }
        console.log ('Not logged in');
    }
  },
  Mutation: {
    logIn: async (parent, { email, password }) => {
        const user = await User.findOne( { email });
        if (!user) {
            console.log('Not an existing user');
        }
        const passPrompt = await user.isCorrectPassword(password);
        if (!password) {
            console.log('Password is incorrect');
        }
        const token = signToken(user);
        return { token, user };
    },
    addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);

        return { token, user };
    },
    saveBook: async,
    deleteBook: async
  },
};

module.exports = resolvers;