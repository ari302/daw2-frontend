import React, { useState } from "react";
import ImagemPrincipal from "../../components/ComponenteImagem"
import ComponenteBarra from "../../components/ComponenteBarra";
import ComponenteSobre from "../../components/ComponenteSobre"

const lista = [

   {
      nome: "aaaaaa",
      tipo: "HOTEL",
      localizacao: "xxxxxxxxx"
   },
   {
      nome: "bbbbbbbbb",
      tipo: "RESTAURANTE",
      localizacao: "yyyyyyyyy"
   },
   {
      nome: "ccccccccc",
      tipo: "TURISTICO",
      localizacao: "zzzzzzzzz"
   }
]

function PaginaPrincipal() {

   const [option, setOption] = useState("HOTEL")

   return (

      <ImagemPrincipal>
         <ComponenteBarra />

         {lista.map((objeto) => (
            (objeto.tipo === option &&
               <div>
                  {objeto.tipo}
                  <div>
                     {objeto.nome}
                  </div>
               </div>
            )
         ))}
      </ImagemPrincipal>

   );
}
export default PaginaPrincipal; 