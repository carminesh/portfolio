import { useContext } from "react";
import { ExplainingContext } from "../context/ExplainingContext";

export default function useExplainingContext() {
    const educationContext = useContext(ExplainingContext);

    if (!educationContext) {
        throw new Error("useExplainingContext must be used within an EducationProvider");
    }

    return educationContext;
}

