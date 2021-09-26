import React from 'react';

const Cart = (props) => {
    // console.log(props.cart);
    const {cart} = props;
    let total = 0;

    for(const installment of cart){
        total = total + installment.installment;
    }

    return (
        <div>
            <h5>Total Member: {props.cart.length} </h5>
                <h6>Total Installment: {total.toFixed(0)} Taka </h6>
            <hr/>
        </div>
    );
};

export default Cart;