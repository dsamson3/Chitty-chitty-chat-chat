import React, {Component} from 'react';
class Message extends Component{
    render(){
      console.log(this.props.type);
      if(this.props.type ==="incomingMessage"){

        return ( <main className="messages">
        <div className="message">
          <span className="message-username">{this.props.userName}</span>
          <span className="message-content">{this.props.message}</span>
          </div>
          </main>);

      } else {
        return ( <div className="message system" >{this.props.message}
        </div>
        );
    }
    }
}

export default Message;