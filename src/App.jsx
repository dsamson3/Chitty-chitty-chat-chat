import React, {Component} from 'react';
import ChatBar from "./ChatBar.jsx"
import MessageList from "./MessageList.jsx"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: {name:'Bob'},
      messages: []
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
       { id: receivedMessage.id,
         userName : receivedMessage.userName,
        content: receivedMessage.content

          }]
        this.setState({ messages: messages});
      }

    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      const newMessage ={id:3, userName:"Michelle", content:"Hello there!"};
      const messages= this.state.messages.concat(newMessage);
      this.setState({messages:messages})
    }, 3000);
  }
addNewMessage(userName, content){
  let oldName = this.state.currentUser.name;
  if(oldName !== userName){
  this.setState({currentUser:{name:userName}})
  }
  const message ={
    type,
    userName:{name:userName},
    content
  }
  this.socket.send(JSON.stringify(message))

}

  render() {
    return (<div>
  <nav className="navbar">
  <a href="/" className="navbar-brand">Chatty</a>
</nav>

<MessageList messages={this.state.messages} currentUser={this.state.currentUser}/>
<ChatBar currentUser={this.state.currentUser} addNewMessage={this.addNewMessage}/>
</div>
    );
  }
}
export default App;


