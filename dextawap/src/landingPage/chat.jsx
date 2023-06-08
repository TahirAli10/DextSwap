import React from 'react'
import '../index.css'
export default function chat() {
    const noOfChats = [
        {id:1, name:"What is data mining"},
        {id:2, name:"define computer science"},
        {id:3, name:"What is Bitcoin"},
    ]
  return (
    <>
        <div className='SelectChat'>
            <div>
            <div>New Chat</div>
            <div>messi</div>
            </div>
            <ul>
                {noOfChats && noOfChats.map(chat =>{
                    return <li key={chat.id} > {chat.name} </li>
                })

                
            }
            </ul>
        </div>
    </>
  )
}
