const { ApolloServer, gql } = require("apollo-server");
const { ApolloServerPluginLandingPageGraphQLPlayground } = require("apollo-server-core");

const typeDefs = gql`
    type Book{
        title: String
        author: String
    }
    // buradaki Query resolvers içindeki Query'e karşılık geliyor. Buradaki Query özel tanımlı ifade. Sadece Query diye yazabilirsin
    type Query{
        books: [Book]
    }
`;

const resolvers = {
  Query: {
    books: () => [
      {
        title: "Harry Potter and the Chamber of Secrets",
        author: "J.K. Rowling",
      },
      {
        title: "Jurassic Park",
        author: "Michael Crichton",
      },
    ],
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground({
      // options
    }),
  ],
});

server.listen().then(({ url }) => console.log(`server is up on ${ url }`));
