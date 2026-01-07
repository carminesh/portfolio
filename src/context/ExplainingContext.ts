import { createContext } from "react";
import { ExplainingModel } from "../models/ExplainingModel";

type ExplainingContextType = ExplainingModel & {
    expanded: boolean;
    toggle: () => void;
};


export const ExplainingContext = createContext<ExplainingContextType | undefined>(undefined)