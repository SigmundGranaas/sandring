import React from 'react';
import './App.scss';
import Landing from './components/Landing/landing';
import Gallery from  './containers/GalleryContainer';
import GalleryImageContainer from './containers/GalleryImageContainer';
import Blog from './components/Blog/controller/BlogContainer';
import BlogEntry from './components/Blog/controller/BlogEntryContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Footer from './components/Footer/Footer';
import headerMock from './components/Header/Mocks/headerMock.json'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <HeaderContainer headerElements={headerMock}/>
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
