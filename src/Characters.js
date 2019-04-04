import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Character from "./Character";

export const Characters = () => (
    <Query
        query={gql`
      query{
  characters{
    results{
      name
      id
      image
    }
  }
}
    `}
    >
        {({ loading, data }) => {
            if (loading) return <p>Loading...</p>;
            return data.characters.results.map(p => (
               <Character
               id={p.id}
               image={p.image}
               name={p.name}
               />
            ));
        }}
    </Query>
);
