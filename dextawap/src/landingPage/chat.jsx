import React from "react";
import "../index.css";
import { Scrollbars } from "react-custom-scrollbars-2";
export default function chat() {
  const noOfChats = [
    { id: 1, name: "What is data mining" },
    { id: 2, name: "define computer science" },
    { id: 3, name: "What is Bitcoin" },
    { id: 1, name: "What is data mining" },
    { id: 2, name: "define computer science" },
    { id: 3, name: "What is Bitcoin" },
    { id: 1, name: "What is data mining" },
    { id: 2, name: "define computer science" },
    { id: 3, name: "What is Bitcoin" },
  ];
  return (
    <>
      <div className="SelectChat">
        <div className="row p-3">
          <div className="col-9 newChat">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="svgChat"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <div className="newChatText"> New Chat</div>{" "}
          </div>
          <div className="col-2 d-flex align-items-center  newChat mx-2">
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              height="1em"
              width="1em"
              className="svgChat"
              style={{ width: "80px !important" }}
            >
              <rect x="3" y="3" width="20" height="20" rx="2" ry="2"></rect>
              <line x1="9" y1="3" x2="9" y2="21"></line>
            </svg>
          </div>
        </div>
        <ul className="chats">
          <Scrollbars style={{ width: 365, height: 300 }}>
            {noOfChats &&
              noOfChats.map((chat) => {
                return (
                  <li key={chat.id}>
                    {" "}
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="h-4 w-4"
                      height="20px"
                      width="40px"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>{" "}
                    <div> {chat.name} </div>{" "}
                  </li>
                );
              })}
          </Scrollbars>
        </ul>
      </div>
    </>
  );
}
