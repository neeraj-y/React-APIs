import React from 'react';
import { UserData } from './UserDataProvider';

export default function withUser(OldComponent) {
    return function ConnectedComponent(props) {
        return (
            <UserData.Consumer>
                {users => <OldComponent {...props} users={users} />}
            </UserData.Consumer>
        )
    }    
}