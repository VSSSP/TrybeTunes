import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Search from './pages/Search';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/TrybeTunes" component={ Login } />
          <Route path="/TrybeTunes/search" component={ Search } />
          <Route path="/TrybeTunes/album/:id" component={ Album } />
          <Route path="/TrybeTunes/favorites" component={ Favorites } />
          <Route path="/TrybeTunes/profile/edit" component={ ProfileEdit } />
          <Route path="/TrybeTunes/profile" component={ Profile } />
          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
