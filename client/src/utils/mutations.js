import gql from "graphql-tag";

export const Login_User = gql`
mutation login($email: String!, $password: String!)
{
    login(email: $email, password: $password)
    {
        token
        user
        {
            _id
            username
        }
    }
}`;

export const Add_User = gql`
mutation AddUser($username: String!, $email: String!, $password: String!)
{
    AddUser(username: $username, email: $email, password: $password)
    {
        token
        user 
        {
            _id
            username
        }
    }
}`;

export const Save_Book = gql`
mutation SaveBook($book: SavedBookInput!)
{
    SaveBook(book: $book)
    {
        username
        email
        bookCount
        savedBooks
        {
            authors
            description
            bookId
            image
            link
            title
        }
    }
}`;