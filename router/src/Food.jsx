import React, { Component } from 'react';

class Food extends Component {
    render() {
        const id=this.props;
        console.log(id);
        return (
            <div>
                <h1>This is the testt</h1>
            </div>
        );
    }
}

export default Food;