import './App.css'
import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm';

function App() {
  if (!localStorage.getItem('username')) return <LoginForm />;
  const projectID="95bc665e-1f2e-4146-bf3e-3b0119f978c7" ;
  return (
    <>
      <ChatEngine 
    height="100vh" 
    projectID={projectID}
    userName={localStorage.getItem('username')} 
    userSecret={localStorage.getItem('password')}
    renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
    onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}>
    </ChatEngine>
    </>
  )
}

export default App
