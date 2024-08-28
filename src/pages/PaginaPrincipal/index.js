import React from "react"
import Componentebarra from "../../components/ComponenteBarranavegacao";
import ComponenteCard from "../../components/ComponenteCard";
import ComponenteSobre from "../../components/ComponenteSobre";
import Imagem from "../../assets/images/campina 1.jpg"
import { Box, Grid } from "@mui/material";
import { Repeat } from "@mui/icons-material";

function PaginaPrincipal() {
   return (
      <div>
         <h1>
            <Componentebarra />
         </h1>
      </div>
   );
}

export default PaginaPrincipal; 