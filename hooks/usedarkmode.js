import { useState } from "react";
import useLocalStorage from "./useLocalStorage";


const useDarkMode = (initialData) => {
    const [darkMode, setDarkMode] = useLocalStorage("darkMode",initialData)
    return [darkMode, setDarkMode]
}

export default useDarkMode;