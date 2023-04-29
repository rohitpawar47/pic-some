import { useState, useContext } from "react";
import { Context } from "./AppContext";


export default function useLocalStorage() {
    const { cartItems } = useContext(Context);

    // useEffect(() => {
    //     const value = JSON.parse(localStorage.getItem('value'));
    //     if (value) {
    //         setValue(value);
    //     }
    // }, []);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(value));
    }, [cartItems]);


    // return [value]
}