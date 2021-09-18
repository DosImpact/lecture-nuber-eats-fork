import React, { useState } from "react";
import "./App.css";
import LoggedIn from "./components/LoggedIn";
import LoggedOut from "./components/LoggedOut";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <header className="App-header">App</header>
      {loggedIn ? <LoggedIn /> : <LoggedOut />}
    </div>
  );
}

export default App;
