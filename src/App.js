import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import './App.css';
import styled, { keyframes } from 'styled-components';
import Character from './components/Character';

const kf = keyframes`
100% {
  opacity: 1;
  transform: scale(1) rotateZ(0);
}
`
const StyledDetails = styled.div`
animation: ${kf} 0.5s ease-in-out forwards;
`

const Header = styled.h1`
color: deepskyblue;
animation: 2s ease-in-out forwards;
background-color: aquamarine;
font-size: 5rem;
display: flex;
justify-content: center;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
    .get('https://swapi.dev/api/people')
    .then(res => {
      console.log(res.data)
      setCharacters(res.data)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <StyledDetails className='container'>
      <Header className='header'>Characters</Header>
      {characters.map((char) => {
        return (
          <Character name={char.name} />
      )
      })}
    </StyledDetails>
  );
}

export default App;
