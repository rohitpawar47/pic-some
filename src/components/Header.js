import React from "react";
import { Context } from "../AppContext";
import { Link } from "react-router-dom";



export default function Header() {

    const { cartItems } = React.useContext(Context);

    function styles() {
        const bool = cartItems.some(item => item.length !== 0);
        if (bool) {
            return "ri-shopping-cart-fill ri-fw ri-2x";
        } else {
            return "ri-shopping-cart-line ri-fw ri-2x";
        }
    };

    return (
        <header>
            {/* Navigation */}
            <Link to={"/"}><h2>Pic Some</h2></Link>
            <Link to={"/cart"}><i className={styles()}></i></Link>

        </header>
    )
}