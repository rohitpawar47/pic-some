import React from "react";
import PropTypes from "prop-types";
import { Context } from "../AppContext";
import useHover from "../hooks/useHover";

export default function Image({ className, img }) {

    const [hovered, ref] = useHover();

    const { addToCart, cartItems, removeItem, isFavourite, addToFavourite, removeFav } = React.useContext(Context);

    function heartIcon() {
        const alreadyFavourited = isFavourite.some(item => item.id === img.id);
        if (alreadyFavourited) {
            return <i className="ri-heart-fill favorite" onClick={() => removeFav(img.id)}></i>
        }
        else if (hovered) {
            return <i className="ri-heart-line favorite" onClick={() => addToFavourite(img)}></i>
        }
    }


    function cartIcon() {
        const alreadyInCart = cartItems.some(item => item.id === img.id)
        if (alreadyInCart) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeItem(img.id)}></i>
        } else if (hovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
        }
    }


    return (
        <div
            className={`${className} image-container`}
            // onMouseEnter={enter}
            // onMouseLeave={leave}
            ref={ref}
        >
            <img src={img.download_url} className="image-grid" />

            {heartIcon()}
            {cartIcon()}
        </div>
    )
};

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        download_url: PropTypes.string.isRequired,
        url: PropTypes.string
    })
};