import React, { Component } from 'react';

class Mouse extends Component {
    constructor(props) {
        super();
        this.state = {
            x: void 0,
            y: void 0
        }
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }

    handleMouseMove(e) {
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }
    
    render() {
        return(
            <div style={{height: '100%'}} onMouseMove={this.handleMouseMove}>
                {this.props.render(this.state)}
            </div>
        )
    }
}

export default Mouse;