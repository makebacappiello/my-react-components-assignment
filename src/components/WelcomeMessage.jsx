import React, { useState } from "react";

function WelcomeMessage({ text }) {
  //   const [welcome, setWelcome] = useState("Welcome");
  //   const text = "Welcome To the Main Page";

  //   function updateWelcome(newWelcome) {
  //     setWelcome(newWelcome);
  //   }

  return (
    <>
      <div>
        {/* <h2>{welcome}!</h2> */}
        {/* <button
        // textContent={{<Contact/>}} onClick={updateWelcome}>New User Click Here</button> */}
      </div>
      <div>
        <h2> {text}</h2>
      </div>
    </>
  );
}

export default WelcomeMessage;
