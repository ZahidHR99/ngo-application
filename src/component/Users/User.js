import React from 'react';
import './Users.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const User = (props) => {
    // console.log(props);
    const cartElement = <FontAwesomeIcon icon={faCartPlus} />
 
    //destructuring
    const {name, age, Mobile, img, installment, loan} = props.user;

    return (
        <div className="col-sm-4 mb-2">
            <div className="card user-card shadow rounded">
                <img className="card-img-top mt-2" src={img} alt="Card image" />
                    <div className="card-body user-svg">
                        <h6 className="card-title text-primary">Name: {name}</h6>
                        <h6 className="card-title">Age: {age}</h6>
                        <h6 className="card-title">Mobile: {Mobile}</h6>
                        <h6 className="card-title">Loan: {loan} Taka</h6>
                        <h6 className="card-title">Instalment: {installment} Taka</h6>
                        <button onClick={()=> props.handleAddToCart(props.user)} className="btn btn-success btn-sm text-light shadow">{cartElement} <b>Add Instalment</b></button><br/>
                    </div>      
            </div>  
        </div>
    );
};

export default User;