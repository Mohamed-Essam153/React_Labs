import logo from './logo.svg';
import './App.css';
import FunctionComponent from './Components/FunctionComponent/FunctionComponent';
import ClassComponent from './Components/ClassComponent/ClassComponent';




function App() {
  return (
    <div className="App">
      <header className="App-header">
          <FunctionComponent />
          <ClassComponent />
      </header>
    </div>
  );
}

export default App;
