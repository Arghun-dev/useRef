import React, { useRef, useState } from 'react'
import UserName from './UserName'
import './App.css';

function App() {
  const [state, setState] = useState("")
  const userNameRef = useRef()

  return (
    <div className="App">
      <button onClick={() => userNameRef.current.changeValue(state)}>ChangeUserName</button>
      <input value={state} onChange={e => setState(e.target.value)} />
      <UserName ref={userNameRef} />
    </div>
  );
}

export default App;
