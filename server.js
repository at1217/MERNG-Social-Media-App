const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const resolvers = require('./graphql/resolvers');
const { MONGODB } = require('./config.js');
const typeDefs = require('./graphql/typeDefs');


const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req })
});

mongoose.connect(MONGODB, { useNewUrlParser: true})
    .then(() => {
        console.log("MongoDB Connceted");
        return server.listen({ port: 5000 });
    })
    .then(res => {
        console.log(`Server running at ${res.url}`);
    })