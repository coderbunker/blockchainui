import React from 'react';
import Skills from '../pages/Skills';
import Register from '../pages/Register';
import Auth from '../pages/Auth';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default () => (
  <BrowserRouter>
    <div>
      <Route component={ScrollToTop} />
      <Switch>
        <Route path="/" exact render={props=> <Register {...props} />}/>
        <Route path="/auth" exact render={props=> <Auth {...props} />}/>
        <Route path="/skills" exact render={props=> <Skills {...props} />}/>
      </Switch>
    </div>
  </BrowserRouter>
)

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};