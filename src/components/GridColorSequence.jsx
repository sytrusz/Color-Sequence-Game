import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme, color }) => ({
  backgroundColor: color,
  height: '50px',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function GridColorSequence() {
  const correctSequence = [
    '#2ecc71', '#2980b9', '#8e44ad', 
    '#2c3e50', '#16a085', '#f1c40f', 
    '#d35400', '#c0392b', '#7ed6df'
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        {correctSequence.map((color) => (
          <Grid item xs={1.33}>
            <Item color={color}></Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}