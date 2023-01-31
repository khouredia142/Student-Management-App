
import React,{Component} from "react";
import { Routes, Route,  BrowserRouter} from 'react-router-dom';
import Login from './connexion/Login';
import Register from './connexion/Register';
import Forgetpassword from './connexion/Forgetpassword';
import ListeStudent from './components/student/ListeStudent';
import EditStudent from './components/student/edit';
import DetailStudent from './components/student/Details';


class App extends Component {
  constructor(){
    super()
    this.state={
      isLoader:true,
            }
  }
  componentDidMount(){
    setTimeout(() => {
     this.setState({isLoader:false})
     }, 1000);
  } 
 render(){
  return (
    <div className="App">
     
      <div>
        <div className="main-content">
         <BrowserRouter>
          <Routes>
             <Route element={<Login />} path='/' exact={true} />
             <Route element={<Register />} path='/Register' /> 
             <Route element={<Forgetpassword />} path='/Forget' /> 
             <Route element={<ListeStudent />} path='/liste-des-etudiants' /> 
             <Route element={<EditStudent />} path='/mise-a-jour-student' /> 
             <Route element={<DetailStudent />} path='/details' /> 
            
          </Routes>
        </BrowserRouter>
        </div>
      </div>
    
    </div>
  );
}
}
 

export default App;
