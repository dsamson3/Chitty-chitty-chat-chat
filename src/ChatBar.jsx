import React, {Component} from "react";
class ChatBar extends Component{
    constructor(props){
        super(props);
        this.state ={
            content:""
        };
        this.contentMessage = this.contentMessage.bind(this);
        this.enterPressed = this.enterPressed.bind(this);
    }
    //update state to chatbar content
    contentMessage(e){
        this.setState({content: e.target.value});
    }
    enterPressed(e) {
        if(e.key === "Enter"){
            this.props.addNewMessage(this.state.content)
            this.setState({content: ""})
        }
    }
    render(){
    return (<footer className="chatbar">
    <input className="chatbar-username" 
    placeholder={this.props.currentUser.name} />

        <input className="chatbar-message" 
        placeholder="Type a message and hit ENTER" 
        onKeyDown={this.enterPressed} 
        onChange={this.contentMessage}
        value={this.state.content} />
      </footer>);
    }
}

export default ChatBar;

