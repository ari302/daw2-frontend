import React from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


function ComponenteCard() {
<<<<<<< Updated upstream
  return (
    <Card sx={{ maxWidth: 6000 }}>
=======
    return (
      <Card sx={{ maxWidth: 6000 }}>
>>>>>>> Stashed changes
      <CardActionArea>
        <CardMedia
          component="img"
          height="600"
          image="https://portal.ufcg.edu.br/images/2020.2/campina.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Campina Grande
          </Typography>
          <Typography variant="body2" color="text.secondary">
<<<<<<< Updated upstream
          Campina Grande é um município brasileiro no estado da Paraíba. Considerada um dos principais polos industriais da Região Nordeste.
=======
          i> class Campina Grande é um município brasileiro no estado da Paraíba. Considerada um dos principais polos industriais da Região Nordeste
>>>>>>> Stashed changes
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ComponenteCard;