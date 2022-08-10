import { useState } from "react";

const useDarkMode = (initialData) => {
    const [darkMode, setDarkMode] = useState(initialData)
    return [darkMode, setDarkMode]
}

export default useDarkMode;