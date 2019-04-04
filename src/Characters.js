import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Character from "./Character";

const GET_CHARACTERS = gql`
    query {
        characters{
            results{
                name
                id
                image
            }
        }
    }`;


export const Characters = () => (
    <Query query={GET_CHARACTERS}>
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
