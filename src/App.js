import React, { createContext } from 'react';
import './App.css';
import ComA from './Comp/ComA';

const FirstName = createContext();
const LastName = createContext();

function App() {
  return (
    <>
      <FirstName.Provider value={"Shivendra"}>
        <LastName.Provider value={"Batham"}>
          <ComA />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
}

export default App;
export { FirstName, LastName };
