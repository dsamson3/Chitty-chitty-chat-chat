import React, {Component} from "react";
class ChatBar extends Component{
    constructor(props){
        super(props);
        this.state ={
            userName: this.props.currentUser,
            content:""
        };
        this.contentMessage = this.contentMessage.bind(this);
        this.enterPressed = this.enterPressed.bind(this);
        this.userNameChange = this.userNameChange.bind(this);
    }
    // userName Change
    userNameChange(e){
       const newName = e.target.value;
       this.setState({userName:newName})

    }

    
    //update state to chatbar content
    contentMessage(e){
        console.log('in content message');
        this.setState({content: e.target.value});
    }
    enterPressed(e) {
        if(e.key === "Enter"){
            this.props.addNewMessage("postMessage",this.state.userName,this.state.content)
            this.setState({content: ""})
        }
    }
    render(){
    return (<footer className="chatbar">
    <input className="chatbar-username" 
    placeholder={this.props.currentUser} 
    value={this.state.userName}
    onChange={this.userNameChange}
    />

        <input className="chatbar-message" 
        placeholder="Type a message and hit ENTER" 
        onKeyDown={this.enterPressed} 
        onChange={this.contentMessage}
        value={this.state.content} />
      </footer>);
    }
}

export default ChatBar;

