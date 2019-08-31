import React, { Component } from 'react';
import { base } from '../base';

class FirebaseComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tickets: []
        }
        this.addTicket = this.addTicket.bind(this);
    }

    addTicket(title, name) {
        var tickets = this.state.tickets.length > 0 ? [...this.state.tickets] : [];
        const id = Date.now();

        tickets.push({
            id,
            title,
            name
        });

        this.setState({tickets})
    }

    componentDidMount() {
        this.ticketsRef = base.syncState('tickets', {
            context: this,
            state: 'tickets'
        })
    }

    componentWillUnmount() {
        base.removeBinding(this.ticketsRef);
    }

    render() {
        console.log(this.state.tickets);
        if (Array.isArray(this.state.tickets)) {
            return (
                <>
                    {this.state.tickets.map((ticket,idx) => {
                        return <div key={idx}>{ticket.title} by {ticket.name}</div>
                    })}
                </>
            )
        } else {
            return <h3>Tickets not found</h3>
        }
    }
}

export default FirebaseComponent;