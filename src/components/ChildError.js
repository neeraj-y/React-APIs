import React from 'react';
import PropTypes from 'prop-types';

const ChildError = ({users, age}) => {
    return(
        <ul style={{display: 'flex', flexDirection: 'row', textAlign: 'center', margin: '10px', padding: 0}}>
            <p>{age}</p>
            {users.map(user => {
                return (
                    <li style={{padding: '5px 0', marginRight: 5, border: '#eee solid 1px', flex: '1', width: 'calc(100% / 5 - 5px)', listStyle: 'none'}} key={user.id}>
                        <div>Name - {user.name}</div>
                        <div>Age - {user.age}</div>
                    </li>
                )
            })}
        </ul>
    )
}

ChildError.propType = {
    users: PropTypes.object,
    age: PropTypes.number
}

export default ChildError;