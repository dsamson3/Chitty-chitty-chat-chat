import React, {Component} from "react";
import Message from "./Message.jsx";
class MessageList extends Component {
    scrollToBottom =()=>{
        this.el.scrollIntoView({behaviour:"smooth"})
    }
    componentDidmount(){
        this.scrollToBottom();
    }
    componentDidUpdate(){
        this.scrollToBottom();
    }
    render(){
       
        const post =this.props.messages.map(post => {
            console.log("rendering<Message>")
            return <Message
            key={post.id}
            type={post.type}
            userName={post.userName}
            message= {post.content}
            userColour={post.userColour}
       /> })
       
        return(<div>
        {post}
        <div ref={el => {this.el =el;}} />
        </div> );
    }
}

export default MessageList;