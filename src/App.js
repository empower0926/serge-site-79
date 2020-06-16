import React from 'react';
import Main from './main/main';
import User from './user_pannels/user';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
 

function App() {
  return (
   <div>
     <Router>
       <Switch>
         <Route exact path="/" component={Main} />
         <Route path="/Signin" component={User} />
         
         
        
       </Switch>
     </Router>
    
         

  </div>

  );
}

export default App;
