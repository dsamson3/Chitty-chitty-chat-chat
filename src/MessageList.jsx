import React, {Component} from "react";
import Message from "./Message.jsx";
class MessageList extends Component {
    render(){
    
        const post =this.props.messages.map(post => {
            console.log("rendering<Message>")
            console.dir(post);
            return <Message
            key={post.id}
            type={post.type}
            userName={post.userName}
            message= {post.content}
            userColour={post.userColour}
       /> })
        return(<div>
        {post}
        </div> );
    }
}

export default MessageList;