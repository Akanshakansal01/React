import React,{useState} from 'react'
import './App.css';
import Section from './components/Section';

function App() {

  const [smileyface,isSmileyFace]=useState(true);
  const [toggle,setToggle]=useState(true);

  return (
    <div>

      {toggle && <Section/>}

      <p style={{textAlign:"center"}}><button onClick={()=> setToggle(!toggle)}>Read More</button></p>
      <h1 style={{textAlign:"center"}} onClick={()=> isSmileyFace(!smileyface)}>{ (smileyface) ? "😂" : "😭"}</h1>

    </div>
  );
}

export default App;
