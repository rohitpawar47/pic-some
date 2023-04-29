import React from "react";
import { Context } from "../AppContext";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";


export default function CartItem({ item }) {
    const { removeItem } = React.useContext(Context);
    const [hovered, ref] = useHover();

    const trashHandler =
        hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";

    return (
        <div className="cart-item">
            <i
                className={trashHandler}
                onClick={() => removeItem(item.id)}
                // onMouseEnter={enter}
                // onMouseLeave={leave}
                ref={ref}
            ></i>
            <img src={item.download_url} width="130px" />
            <p>$5.99</p>
        </div>
    )
};

CartItem.propTypes = {
    item: PropTypes.shape({
        download_url: PropTypes.string.isRequired
    })
};