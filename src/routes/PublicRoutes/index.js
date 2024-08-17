import PaginaPrincipal from "../../pages/PaginaPrincipal";


const PublicRoutes ={
    path:'/',
    children:[
       {
        path:'inicio',
        element:<PaginaPrincipal/>
       } 
    ]
};

export default PublicRoutes;