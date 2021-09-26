import React from 'react';
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Member from '../Member/Member';
import User from './User';
import './Users.css';
//fontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

const Users = () => {

    const payElement = <FontAwesomeIcon icon={faCartArrowDown} />

    const [users, setUsers] = useState([]);
    const [cart, setCart] = useState([]);
    const [name, setName] = useState([]);

    useEffect(() => {
        fetch('../../member.JSON')
        .then(res => res.json())
        .then(data => setUsers(data));
    }, [])

    const handleAddToCart = (user) => {
        // console.log(user);
        const newCart = [...cart, user];
        const newName = [...name, user.name];
        setCart(newCart);
        setName(newName);
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9">
                    <div className="row">
                    {
                        
                        users.map(user => <User
                             user={user}
                             key={user.key}
                             handleAddToCart={handleAddToCart}
                            ></User>)
                    }
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card shadow card-top-bg">
                        <div className="card-body">
                        
                            <Cart cart={cart}></Cart>
                            
                         {
                             //add member name
                             name.map(name => <Member name={name}></Member>)
                         }
                            <hr/>
                            <button className="btn btn-primary text-light shadow">{payElement} Submit Installment</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;