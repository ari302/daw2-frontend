import React, { useState } from "react";
import ImagemPrincipal from "../../components/ComponenteImagem";
import ComponenteBarra from "../../components/ComponenteBarra";
import ComponenteSobre from "../../components/ComponenteSobre";
import ComponenteCard from "../../components/ComponenteCard";

const lista = [
   {
      nome: "xiquexique",
      tipo: "HOTEL",
      localizacao: "Rua alfredo Regis, 182",
   },
   {
      nome: "bbbbbbbbb",
      tipo: "RESTAURANTE",
      localizacao: "yyyyyyyyy",
   },
   {
      nome: "ZZZZZZZZZZZZ",
      tipo: "RESTAURANTE",
      localizacao: "SBRDRTCFTCFTVC",
   },
   {
      nome: "ccccccccc",
      tipo: "TURISTICO",
      localizacao: "zzzzzzzzz",
   },
];

function PaginaPrincipal() {
   const [option, setOption] = useState("SOBRE");

   return (
      <ImagemPrincipal>
         <ComponenteBarra option={option} setOption={setOption} />

         {option !== 'SOBRE' &&
            lista
               .filter((item) => item.tipo === option)
               .map((item, index) => (
                  <ComponenteCard nome={item.nome} />
               ))
         }

         {option === 'SOBRE' && <ComponenteSobre />}


      </ImagemPrincipal>
   );
}

export default PaginaPrincipal;
