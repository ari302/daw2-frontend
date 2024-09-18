import React from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


function ComponenteCard(props) {

  const { nome, localizacao } = props;

  return (
    <Card sx={{ width: "100px", height: "50px" }}>
      <CardActionArea>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {nome}
            alagoinha
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {localizacao}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ComponenteCard;