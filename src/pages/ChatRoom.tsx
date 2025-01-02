import React from 'react'
import Header from '../components/Header'

function ChatRoom() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-row justify-center gap-1 items-center dark:bg-gradient-to-br dark:from-chatter-start dark:via-chatter-mid dark:to-chatter-end text-white">
        <div className=" w-[30%] h-screen">

        </div>
        <div className="w-full"></div>
      </div>
    </>
  )
}

export default ChatRoom