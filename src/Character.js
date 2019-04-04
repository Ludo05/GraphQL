import React from 'react';
const Character = ({id,name,image}) => (
    <>
        <p>{id}</p>
        <p>{name}</p>
        <img alt={id} src={image}/>
    </>
);
export default Character;