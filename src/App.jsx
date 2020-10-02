import React from 'react';
import './App.css'
import Landing from './components/Landing/landing'
import Gallery from  './components/Gallery/gallery'
import ImagePage from './components/Gallery/imagePage/imagePage'
import Blog from './components/Blog/Blog'
import BlogEntry from './components/Blog/blogEntry/blogEntry'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Header/>
        <Switch>
          <Route path="/" exact component={Landing}/>
          <Route path="/gallery" exact component={Gallery}/>
          <Route path="/gallery/"  component={ImagePage}/>
          <Route path="/blog" exact component={Blog}/>
          <Route path="/blog/:id" component={BlogEntry}/>
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App;
