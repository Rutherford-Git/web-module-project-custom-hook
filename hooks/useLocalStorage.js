import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
    const [state, setstate] = useState(()=>{
        if(localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key));
        }

        localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
    })

    const setStoredState = (value) =>{
        localStorage.setItem(key, JSON.stringify(value));
        setstate(value)
    }

    return ([state, setStoredState])
}

export default useLocalStorage