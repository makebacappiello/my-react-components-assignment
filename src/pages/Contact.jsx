import React from "react";
import WelcomeMessage from "../components/WelcomeMessage";
//import welcome
//render welcome message in the JSX
function Contact() {
  const name = "Ariel";

  return (
    <>
      <WelcomeMessage text="Welcome to the Contact Page" />
      <h2>{name}</h2>
    </>
  );
}

export default Contact;
