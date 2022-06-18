import React, { Component } from 'react';
import './App.css';
import MenuBar from './Components/MenuBar';
import Header from './Components/Header';
import RouterItems from "./Components/RouterItems";
import Container from '@material-ui/core/Container';
//import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//toast.configure()

class App extends Component {
  render() {
    return (
       <div className="App">
       <div className="header"> <Header/></div>
       <div className="container">
         <aside className="drawer"><MenuBar/></aside>
         <Container>
          <main className="main" style={{marginTop: "30px"}}><RouterItems/></main>
         </Container>
         
       </div>
     </div>
    );
  }
}

export default App;
