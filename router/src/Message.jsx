import React, { Component } from 'react';
import './Message.css';
class Message extends Component {
    render() {
        return (
            <div className="message-container">
                {this.props.children}
            </div>
        );
    }
}

export default Message;