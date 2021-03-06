import React from 'react';
import './App.scss';
import Landing from './components/Landing/landing';
import Gallery from  './containers/GalleryContainer';
import GalleryImageContainer from './containers/GalleryImageContainer';
import Blog from './containers/BlogContainer';
import BlogEntry from './containers/BlogEntryContainer';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
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
          <Route path="/gallery/:id"  component={GalleryImageContainer}/>
          <Route path="/blog" exact component={Blog}/>
          <Route path="/blog/:id" component={BlogEntry}/>
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App;
