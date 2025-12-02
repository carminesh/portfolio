import { createContext } from "react";
import { ExplainingModel } from "../models/ExplainingModel";



export const ExplainingContext = createContext<ExplainingModel | undefined>(undefined)