import React from 'react'
import Navigationbar from './components/Navbar/Navbar'
import Sidebar from './components/Layout/Sidebar'
import ChatContainer from './components/Chat/ChatContainer'
import ChatHeader from './components/Chat/ChatHeader'

function Rootlayout() {
  return (
    <div>
        <Navigationbar/>
        <ChatContainer/>

    </div>
  )
}

export default Rootlayout