import './App.css';
import ClassProps from './Components/ClassProps/ClassProps';
import CounterComponent from './Components/CounterComponent/CounterComponent';
// import FunctionComponent from './Components/FunctionComponent/FunctionComponent';
// import ClassComponent from './Components/ClassComponent/ClassComponent';
import FunctionalProps from './Components/FunctionalProps/FunctionalProps';
import LoginComponent from './Components/LoginComponent/LoginComponent';



function App() {
  return (
    <div className="App">
          {/* <FunctionComponent />
          <ClassComponent /> */}

          {/* -------------------------------FunctionalProps--------------------------------- */}
          {/* <FunctionalProps name="Mohamed Essam" age={24} university="tanta" city="tanta">
            <div>i am an IoT developer </div>
            <p> THIS IS MY BIO </p>
          </FunctionalProps> */}

          {/* -----------------------------ClassProps----------------------------------------- */}
          {/* <ClassProps name="IoT" grade={3.8}>
            <h2>
              This is my course details
            </h2> 
          </ClassProps> */}

          {/* -----------------------------LoginComponent------------------------------------- */}
          {/* <LoginComponent/> */}
          
          {/* -----------------------------CounterComponent------------------------------------- */}
          <CounterComponent>
            
          </CounterComponent>


    </div>
  )
}

export default App;
