import {MultiChatSocket,MultiChatWindow,useMultiChatLogic,useSingleChatLogic} from 'react-chat-engine-advanced'

const ChatPage = (props) => {
    const chatProps=useMultiChatLogic('42967552-11a5-4eee-8079-f26227226eb3', props.user.username, props.user.secret)
    return (<div style={{height:'100vh'}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style={{height:"100%"}}/>
    </div>);
  };
  export default ChatPage;