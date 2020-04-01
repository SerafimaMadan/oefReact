import React from 'react';
import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
    <Header/>
    <Sidebar/>
    <div className="app-wrapper-content">
    <Route path="/profile" component={Content}/>
    <Route path="/dialogs"  component={Dialogs}/>
    <Route path="/news" component={Dialogs}/>
    <Route path="/music" component={Dialogs}/>
    <Route path="/settings" component={Dialogs}/>
    </div>
    </div>
    </BrowserRouter>
  );
};


export default App;
