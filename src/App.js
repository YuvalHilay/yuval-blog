
import './index.css';
import NavBar from './NavBar';
import Home from './Home';
import Create from './Create';
import NotFound from './NotFound';
import { BrowserRouter as Router , Route ,Switch} from 'react-router-dom/cjs/react-router-dom.min';
import BlogDetails from './BlogDetails';
function App() {

  // const person = {name: 'yoshi' , age: 30};
  return (
    <Router>
    <div className="App">
      <NavBar/>
     <div className = "content">
      <Switch>
       <Route exact path = "/">
        <Home/>
       </Route>
       <Route path = "/create">
        <Create/>
       </Route>
       <Route path = "/blogs/:id">
        <BlogDetails/>
       </Route>
       <Route path="*">
              <NotFound />
      </Route>
      </Switch>
     </div>
    </div>
   </Router>
  );
}

export default App;