import React from "react"
import Componentebarra from "../../components/ComponenteBarranavegacao";
import ComponenteCard from "../../components/ComponenteCard";
import ComponenteSobre from "../../components/ComponenteSobre";

function PaginaPrincipal() {
   return(
      <div>
         <h1>
            <Componentebarra/>
            <ComponenteCard/>
           
         </h1>
     </div>
   );
}

export default PaginaPrincipal; 