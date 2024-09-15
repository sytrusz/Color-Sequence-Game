import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardColor from './CardColor';

const shuffleArray = (array) => {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}; // shuffle algorithm

export default function GridLayout() {
  const correctSequence = [
    '#2ecc71', '#2980b9', '#8e44ad', 
    '#2c3e50', '#16a085', '#f1c40f', 
    '#d35400', '#c0392b', '#7ed6df'
  ]; // sakto nga sunod sa color

  const shuffledSequence = shuffleArray(correctSequence); // shuffle

  const [userSequence, setUserSequence] = useState([]);
  const [colors, setColors] = useState(Array(9).fill('#fff')); // coveran ug white (hide)
  const [sequenceMap] = useState(shuffledSequence);

  const cardClick = (index) => {
    if (userSequence.length === correctSequence.length) return;

    const expectedColor = correctSequence[userSequence.length];
    const clickedColor = sequenceMap[index];

    if (colors[index] === '#fff') {
      if (clickedColor === expectedColor) {
        const newUserSequence = [...userSequence, clickedColor];
        const newColors = [...colors];
        newColors[index] = clickedColor;

        setUserSequence(newUserSequence);
        setColors(newColors);
        
        if (newUserSequence.length === correctSequence.length) {
          alert('You won!'); // daog alert
          
          const resetGameConfirmation = window.confirm('Do you want to reset the game?'); // ask user kung ireset ba
          if (resetGameConfirmation) {
            window.location.reload(); // refresh
            resetGame(); // reshuffle
          }
        }
      } else {
        resetGame();
      }
    }
  };

  const resetGame = () => {
    setUserSequence([]);
    setColors(Array(9).fill('#fff'));
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {colors.map((color, index) => (
          <Grid item xs={4} key={index}>
            <CardColor color={color} onClick={() => cardClick(index)} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}