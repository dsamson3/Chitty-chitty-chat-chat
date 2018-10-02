import React, {Component} from 'react';
import Message from "./Message.jsx";
import ChatBar from "./ChatBar.jsx"
import MessageList from "./MessageList.jsx"
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: {name:'Bob'},
      messages: [{
        userName: "Bob",
        content:
        "have you seen my marbles",
      id: 123},
      {userName:"Anonymous",
    content: "No, I think you lost them. You lost your marbles Bob. You lost them for good",
  id:345}]
    };
  }
  componentDidMount(){
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      const newMessage ={id:3, userName:"Michelle", content:"Hello there!"};
      const messages= this.state.messages.concat(newMessage);
      this.setState({messages:messages})
    }, 3000);
  }
addNewMessage(userName, content){
  const message = {id,userName, content}

}

  render() {
    return (<div>
  <nav className="navbar">
  <a href="/" className="navbar-brand">Chatty</a>
</nav>

<MessageList messages={this.state.messages} currentUser={this.state.currentUser}/>
<ChatBar currentUser={this.state.currentUser} newMessage={this.addNewMessage.bind(this)}/>
</div>
    );
  }
}
export default App;


