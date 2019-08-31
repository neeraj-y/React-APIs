import React, { Component } from 'react';

class Validation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isError: false,
            name: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    handleChange(e) {
        let val = e.target.value;
        if(isNaN(+val)) {
            alert('Invalid input');
        } else {
            this.setState({
                [e.target.name]: val
            })
        }
    }

    render() {
        return <input type='text' name='name' value={this.state.name} onChange={this.handleChange} />
    }
}

export default Validation;