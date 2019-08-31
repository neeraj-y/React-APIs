import React, { Component, createContext } from 'react';
export const UserData = createContext();

class UserDataProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data : [
                {name: 'Madan',age: 23, id: 1},
                {name: 'Anand',age: 18, id: 2},
                {name: 'Azad',age: 44, id: 3},
                {name: 'Manoj',age: 51, id: 4},
                {name: 'Pankaj',age: 12, id: 5}
            ]
        };        
    }    

    render() {
        return(
            <UserData.Provider value={this.state.data}>
                {this.props.children}
            </UserData.Provider>
        );
    }
}

export default UserDataProvider;