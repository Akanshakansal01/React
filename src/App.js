// import logo from './logo.svg';
import './App.css';
import Props from './components/Props';

function App() {
  return (
    // jsx code . JSX stands for JavaScript XML.
    <div>

      <Props name="Akansha Kansal" age="20" colour="red">
            <h1> Inside Props</h1>
            <p> This is a component inside first prop component</p>
      </Props>
      <Props name="Megha Kansal" age="22" colour="pink"/>
      <Props name="Avi Kansal" age="14" colour="black"/>
      <Props name="Aman Kansal" age="23" colour="brown"/>

      {/* <div>
        
        <p> This is a react component.</p>
        
      </div>
      <div>
        
        <p> This is another nested component.</p>
        
      </div> */}
    </div>
  );
}

export default App;
