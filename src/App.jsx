import React, {Component} from 'react';
import ChatBar from "./ChatBar.jsx"
import MessageList from "./MessageList.jsx"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userCount:0,
      currentUser:'Anonymous',
      messages: [],
      userColour:''
    };
    this.addNewMessage = this.addNewMessage.bind(this);
  }
  componentDidMount(){
    const ws = new WebSocket("ws://localhost:3001");
    this.socket = ws;

    ws.onopen = function(event){
      console.log('Connected to Server');
    };
      ws.onmessage = (event)=>{
        const receivedMessage = JSON.parse(event.data);
        console.log("Message", receivedMessage);
        const messages = [...this.state.messages, 
         { type:receivedMessage.type,
           id: receivedMessage.id,
           userName : receivedMessage.userName,
          content: receivedMessage.content,
          userColour: receivedMessage.userColour
        }]
        switch(receivedMessage.type){
          case "incomingMessage":{
            this.setState({ messages: messages})
            break;
          }
          case "updateUserCount":{
            this.setState({
              userCount: receivedMessage.userCount,
            })
            break;
          }
          case "incomingNotification":{
            const postNotification = this.state.messages.concat(receivedMessage)
            this.setState({messages:postNotification})
            break;
          }
        }
        
      }

    console.log("componentDidMount <App />");
  }
addNewMessage(type,userName, content){
  let oldName = this.state.currentUser;
  if(oldName !== userName){
    const userNameCheck = {
      type:"postNotification",
      content:`${oldName} has changed their name to ${userName}`
    }
    oldName = userName;
  this.socket.send(JSON.stringify(userNameCheck));
  }
  const message ={
    type,
    userName,
    content
  }
  this.socket.send(JSON.stringify(message))

}

  render() {
    return (<div>
  <nav className="navbar">
  <a href="/" className="navbar-brand">Chatty</a>
  <span className="counter">{this.state.userCount} Users Online!</span>
</nav>

<MessageList messages={this.state.messages} currentUser={this.state.currentUser} userColour={this.state.userColour}/>
<ChatBar currentUser={this.state.currentUser} addNewMessage={this.addNewMessage}/>
</div>
    );
  }
}
export default App;


