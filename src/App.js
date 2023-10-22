import './App.css';
import ClassProps from './Components/ClassProps/ClassProps';
import CounterComponent from './Components/CounterComponent/CounterComponent';
// import FunctionComponent from './Components/FunctionComponent/FunctionComponent';
// import ClassComponent from './Components/ClassComponent/ClassComponent';
import FunctionalProps from './Components/FunctionalProps/FunctionalProps';
import Lab3_task1 from './Components/Lab3_task1/Lab3_task1';
import Lab3_task2 from './Components/Lab3_task2/Lab3_task2';
import comp1 from './Components/Lab3_task3/comp1';
import { UserProvider } from './Components/Lab3_task3/compContext';
import GetPosts from './Components/Lab3_task4/GetPost';
import PostnumPosts from './Components/Lab3_task4/PostnumPosts';
import Lab4_task1 from './Components/Lab4_task1/Lab4_task1';
import Lab4_task2 from './Components/Lab4_task2/Lab4_task2';
import GetUsingHooks, { PostsList } from './Components/Lab5_task1/GetUsingHooks';
import GetWithSearchAPI, { PostSearch } from './Components/Lab5_task1/search';




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
      {/* <CounterComponent>
            
          </CounterComponent> */}
      {/* ---------------------------------------------------------------day_3 tasks-------------------------------------------------------------- */}
      {/* -----------------------------CounterComponent------------------------------------- */}
      {/* <Lab3_task1></Lab3_task1> */}
      {/* -----------------------------handle Login and Signup------------------------------------- */}
      {/* <Lab3_task2></Lab3_task2> */}
      {/* -----------------------------context------------------------------------- */}
      {/* <userProvider value="Hello IOT this is Iot Meeting">
        <comp1></comp1>
      </userProvider> */}
      {/* ---------------------------------API---------------------------------------------- */}
      {/* <GetPosts></GetPosts>
      <PostnumPosts></PostnumPosts> */}
      {/* _________________________________________________________________day_4 tasks_____________________________________________________________________ */}
      {/* ---------------------------------hooks---------------------------------------------- */}
      {/* <Lab4_task1></Lab4_task1> */}
      {/* ---------------------------------hooks_signin and signup---------------------------------------------- */}
      {/* <Lab4_task2></Lab4_task2> */}
      {/* _________________________________________________________________day_5 tasks_____________________________________________________________________ */}
      {/* ---------------------------------task1---------------------------------------------- */}
      <GetWithSearchAPI></GetWithSearchAPI>
      <GetUsingHooks></GetUsingHooks>
      
    </div>
  );
}

export default App;
