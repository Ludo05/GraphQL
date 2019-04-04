import React from 'react';
import ApolloClient from "apollo-boost";
import {Characters} from './Characters'
import ApolloProvider from "react-apollo/ApolloProvider";

 const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql/"
  });

export const App = () => (
    <ApolloProvider client={client}>
        <div className="container">
                <Characters />
        </div>
    </ApolloProvider>
);


