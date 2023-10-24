
import './index.css';
import NavBar from './NavBar';
import Home from './Home';
function App() {

  // const person = {name: 'yoshi' , age: 30};
  return (
    <div className="App">
      <NavBar/>
     <div className = "content">
      <Home/>

     </div>
    </div>
  );
}

export default App;
