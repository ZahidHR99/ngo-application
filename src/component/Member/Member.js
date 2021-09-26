import React from 'react';
import './Member.css';

const Member = (props) => {
    const {name} = props;
    return (
        <div>
            <p className="member-name">{name}</p>
        </div>
    );
};

export default Member;