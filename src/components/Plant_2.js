import React, { Component } from 'react';
import { UserData } from './UserDataProvider';
import PropTypes from 'prop-types';

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

class Plant extends Component {
    //static contextType = UserData;
    handleClick(e, _o) {
        console.log(e , _o);
    }

    renderList(userList) {
        if (userList instanceof Array) {
            return userList.map(user => {
                return (
                    <li style={styles.liStyle} key={user.id} onClick={e => this.handleClick(e, user)}>
                        <div>Name : {user.name}</div>
                        <div>Age  : {user.age}</div>
                    </li>
                )
            })
        }
    }

    render() {
        console.log('Inside render context =>' , this.context);
        return (
            <ul style={styles.ulStyle}>{this.renderList(this.context)}</ul>
        )
    }
}

Plant.propTypes = {
    name: PropTypes.number.isRequired
}

Plant.contextType = UserData;

export default Plant;