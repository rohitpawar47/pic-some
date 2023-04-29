import React from "react"
import { Context } from "../AppContext";
import CartItem from "../components/CartItem";


function Cart() {

    const { cartItems, emptyCart } = React.useContext(Context);

    // const [placeOrder, setPlaceOrder] = React.useState(false);
    const [order, setOrder] = React.useState("Place Order");

    const cartItemDislpay = cartItems.map(item =>
        <CartItem key={item.id} item={item} />
    )

    const totalCost = cartItems.length * 5.99;
    const totalDisplay = totalCost.toLocaleString("en-US", { style: "currency", currency: "USD" });


    // With Out UseEffect..
    function orderHandler() {
        // setPlaceOrder(prevOrder => !prevOrder);
        setOrder("Ordering...");
        setTimeout(() => {
            console.log("Order Placed!");
            setOrder("Place Order");
            emptyCart();
        }, 3000);
    };


    // By using UseEffect...
    // React.useEffect(() => {
    //     if (placeOrder) {
    //         setTimeout(() => {
    //             console.log("Order Placed!");
    //             setPlaceOrder(false);
    //             emptyCart();
    //         }, 3000);
    //     }
    // }, [placeOrder]);


    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemDislpay}
            <p className="total-cost">Total: {totalDisplay}</p>
            <div className="order-button" >
                {/* <button>{placeOrder ? "Ordering..." : "Place Order"}</button> */}
                {
                    cartItems.length !== 0 ?
                        <button onClick={orderHandler}>{order}</button> :
                        <p>You have no item in your cart.</p>
                }
            </div>
        </main>
    )
}

export default Cart