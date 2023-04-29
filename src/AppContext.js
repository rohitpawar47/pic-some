import React, { useState, useEffect } from "react"

const Context = React.createContext();

function ContextProvider({ children }) {
    const [allPhotos, setAllPhotos] = useState([]);
    const itemsFromLocalStorage = JSON.parse(localStorage.getItem("cartItems")) || [];
    const storeFav = JSON.parse(localStorage.getItem("isFavourite")) || [];
    const [isFavourite, setIsFavourite] = useState(storeFav);
    const [cartItems, setCartItems] = useState(itemsFromLocalStorage);

    // function toggleFavorite(id) {
    //     const updateArr = allPhotos.map(photo => {
    //         if (photo.id === id) {
    //             console.log(id);
    //             console.log(isFavourite);
    //             return { ...photo, isFavourite: !photo.isFavourite }
    //         } else {
    //             return photo;
    //         }
    //     })
    //     setAllPhotos(updateArr);
    // };

    useEffect(() => {
        localStorage.setItem("isFavourite", JSON.stringify(isFavourite));
    }, [isFavourite]);

    function addToFavourite(f_Item) {
        setIsFavourite(prevFavItem => [...prevFavItem, f_Item]);
    };

    function removeFav(id) {
        setIsFavourite(prevFavItem => prevFavItem.filter(item => item.id !== id));
    };

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    function emptyCart() {
        setCartItems([]);
    };

    function removeItem(id) {
        setCartItems(prevCartItem => prevCartItem.filter(item => item.id !== id));
    };

    function addToCart(newItem) {
        setCartItems(prevItem => [...prevItem, newItem]);
    };

    const url = "https://picsum.photos/v2/list?page=2&limit=100";
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, []);
    return (

        <Context.Provider value={{ allPhotos, addToCart, cartItems, removeItem, emptyCart, isFavourite, addToFavourite, removeFav }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }