import React from 'react';
import ChildError from './ChildError';

const ErrorParent = () => {
    const data = [
        {name: 'Madan',age: 23, id: 1},
        {name: 'Anand',age: 18, id: 2},
        {name: 'Azad',age: 44, id: 3},
        {name: 'Manoj',age: 51, id: 4},
        {name: 'Pankaj',age: 12, id: 5}
    ];

    return(<ChildError users={data} age={'Pawan'} />)
}

export default ErrorParent;