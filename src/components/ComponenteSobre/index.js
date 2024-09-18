import React from "react"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { red } from "@mui/material/colors";

function ComponenteSobre() {
  return (
    <Box sx={{ width: '100%',MaxWidth: 500 }}>
      <Typography variant="h1" gutterBottom>
      SOBRE
      </Typography>
      <Typography variant="h1" gutterBottom>
      esse site listá de forma simples a listagem de hoteis,restaurantes e pontos turisticos da cidade de Campina Grande.
      </Typography>
    </Box>
  );
}

export default ComponenteSobre;