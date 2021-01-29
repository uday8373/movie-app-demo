/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import Home from './Containers/Home';
import {ApolloProvider, ApolloClient, InMemoryCache, ApolloLink, HttpLink, createHttpLink } from '@apollo/client';
import { onError } from "@apollo/client/link/error";
import { BASE_URL } from './Utils/constants';

const App = () => {


  const link = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ),
      );
  
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  const client = new ApolloClient({
    uri: BASE_URL,
    cache: new InMemoryCache(),
    link: ApolloLink.from([link, new HttpLink({uri: BASE_URL})])
  });

  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
};

export default App;
