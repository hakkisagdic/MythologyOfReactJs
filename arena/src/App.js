import './App.css';
import AnimalList from './components/AnimalList';
import FormAnimal from './forms/FormAnimal';
import Navbar from './layouts/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from "./pages/NotFound";
import Contribute from './pages/Contribute';
function App() {
  return (
    <Router>
   <div>
     <Navbar/>
     <div className="container">
       <div className="row">
         <Switch>
     <Route exact path="/" component={AnimalList}></Route>
     <Route exact path="/form/:id" component={FormAnimal}></Route>
     <Route exact path="/contribute" component={Contribute}></Route>
     <Route  component={NotFound}></Route>
         </Switch>
         </div>
     </div>
   </div>
    </Router>
  );
}

export default App;
