import { TravelExplorer } from "@mui/icons-material";
import axios from "axios";

const api = axios.create({
    baseURL:"//http://localhost:1337/api",
 });

export const createInicio = async (InicioData) => {
    return await api.post("/TravelExplores", InicioData);
}

export default {
    createComponente
};