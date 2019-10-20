import React, { Component, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

import './App.scss';
import './assets/sass/themes.scss';
import Navigation from './components/Navigation/Navigation';
import Portfolio from './containers/Portfolio/Portfolio';
import About from './containers/About/About';
import Experience from './containers/Experience/Experience';
import Skills from './containers/Skills/Skills';
import NotFound from './containers/NotFound/NotFound';
import Layout from './hoc/Layout/Layout';
import Theme from './containers/Theme/Theme';

// add Font Awesome icons to library
library.add(fab, faCheckSquare, faCoffee);

const themeNames = { dark: `dark-theme`, light: `light-theme` }; 

const App = (props: any) => {

  const [themeName, setThemeName] = useState(themeNames.dark);

  return (
    <BrowserRouter>
      <Theme themeName={themeName}>
        <Layout setThemeName={setThemeName}>
          <Switch>
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/experience" component={Experience} />
            <Route path="/skills" exact component={Skills} />
            <Route path="/" exact component={About} />
            {/* <Redirect from="/something" to="/something-else" /> */}
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Theme>
    </BrowserRouter>
  );
}

export default App;