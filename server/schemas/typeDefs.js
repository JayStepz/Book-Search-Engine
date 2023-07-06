const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Query {

        me: User

    }

    type Mutation {

        login(email: String!, password: String!): Auth

        addUser(username: String!, email: String!, password: String!): Auth

        saveBook(book: SavedBookInput): User

        removeBook(bookId: String!): User

    }

    type User {

        _id: ID

        email: String

        username: String

        bookCount: Int

        savedBooks: [Book] 

    }

    type Book {

        _id: ID

        title: String

        authors: [String]

        description: String

        image: String

        link: String

        bookId: String

    }

    type Auth {

        token: ID!

        user: User

    }
`;

module.exports = typeDefs;