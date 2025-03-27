import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
// import WelcomeMessage from "./components/WelcomeMessage";
//app should render the pages and the pages should render the components
//make your welcome message dynamic by sending props from the parent
//study the cheat sheet where we added components and props
function App() {
  return (
    <>
      <h1>This is the Main Content of Makeba's Compamy</h1>
      {/* <div>{home}</div> */}
      <div>
        <Home />
        <Contact />
      </div>
    </>
  );
}

export default App;
