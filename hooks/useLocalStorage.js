import { useState } from "react";

const useLocalStorage = () => {
    const [state, setstate] = useState(()=>{
        if(localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key));
        }

        localStorage.setItem(key, JSON.stringify(initialValue));
    })
}

export default useLocalStorage