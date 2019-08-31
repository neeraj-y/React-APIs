import React from 'react';

const styles = {
    ulStyle: {
        listStyle: 'none',
        display: 'flex',
        textAlign: 'center',
        padding: 0,
        margin: '0 20px'
    },
    liStyle: {
        flex: 1,
        width: 'calc(100%/5 - 5)',
        marginRight: 5,
        border: '1px solid #eee',
        padding: 5
    }
}

const Plant = ({users, name}) => {
    return(
        <ul style={styles.ulStyle}>Prop passed name => {name}
            {users.map(user => {
                return <li style={styles.liStyle} key={user.id}>
                    <div>Name - {user.name}</div>
                    <div>Age - {user.age}</div>
                </li>
            })}
        </ul>
    )
}

export default Plant;
