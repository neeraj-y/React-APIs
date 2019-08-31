import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    /*static getDerivedStateFromError(error) {
        console.log('getDerivedStateFromError called');
        return {
            hasError: true
        }
    }*/

    componentDidCatch(error, info) {
        console.log('componentDidCatch called');
        console.log(`error : ${error} -- info : ${info} `);
        this.setState((prevState, props) => {
            return {
                hasError: true
            }
        })
    }

    render() {
        if (this.state.hasError) {
            return <h2 style={{color: 'red'}}>The application encountered an error</h2>
        }
        return this.props.children;      
    }
}

export default ErrorBoundary;