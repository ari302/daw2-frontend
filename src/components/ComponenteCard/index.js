import React from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


function ComponenteCard() {
  return (
    <Card sx={{ maxWidth: 6000 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="1000"
          image="https://portal.ufcg.edu.br/images/2020.2/campina.jpg"
          alt="Campina"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          </Typography>
          <Typography variant="body2" color="text.secondary">
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ComponenteCard;
