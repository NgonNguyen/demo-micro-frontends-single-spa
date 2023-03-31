import { useState } from "react";

export default function Root(props) {

  let [message, setMessage] = useState('')

  document.addEventListener('sendMessageEvent', (data) => {
    console.log("react-app receives: " + data.detail.message);
    setMessage(data.detail.message)
  });

  return (
    <div style={{textAlign: "center", fontSize: '25px'}}>
      <span>
        This is react app
        {/* {props.name} is mounted! */}
        {/* <br />
        <a href="/angular">Go to Angular apps</a> */}
      </span>
      <br />
      { message && (<span>{ message }</span>) }
    </div>
  );
}
