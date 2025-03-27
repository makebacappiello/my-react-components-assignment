import React from "react";
import WelcomeMessage from "../components/WelcomeMessage";
//render welcome message in the JSX
function Home() {
  const login = "Please Login";
  const homeWelcome = "Welcome Back!";
  return (
    <>
      <WelcomeMessage text={login} />

      <WelcomeMessage text={homeWelcome} />
      {/* <h3>{login}</h3> */}
    </>
  );
}

export default Home;
