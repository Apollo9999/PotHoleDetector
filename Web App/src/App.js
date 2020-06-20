import React from 'react';
import Header from './component/header/header.component.jsx';
import Report from './component/report/report.component.jsx';
import './App.css'
import { Switch, Route } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom'; 
import SignInAndSignUpPage from './component/SignInAndSignUpPage/SignInAndSignUpPage.component.jsx';
class App extends React.Component{


  constructor()
  {
      super();
      this.state = 
      {
          name:'',
          location:''

      };
  }

  handleChange=(e)=>
  {
    this.setState({[e.target.name]:e.target.value});
    console.log(this.state);
  }

   render(){
    return (
      <div className="App">
     <Header/>
     <Router>
     
   <Route exact path='/' component={Report}/>
     <Route path='/signin' component={SignInAndSignUpPage}/>
     </Router>
      </div>
    );

  
  }
 
} 

export default App;
