import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import './App.scss'
import './assets/sass/themes.scss'
import Portfolio from './containers/Portfolio/Portfolio'
import About from './containers/About/About'
import Experience from './containers/Experience/Experience'
import Skills from './containers/Skills/Skills'
import NotFound from './containers/NotFound/NotFound'
import Layout from './hoc/Layout/Layout'
import Theme from './containers/Theme/Theme'

// add Font Awesome icons to library
library.add(fab, faHome, faEnvelope)

const themeNames = { dark: `dark-theme`, light: `light-theme` }

const App = (props: any) => {
  const [themeName, setThemeName] = useState(
    localStorage.getItem('mariah-theme') ?? themeNames.dark
  )

  useEffect(() => {
    localStorage.setItem('mariah-theme', themeName)
  }, [themeName])

  return (
    <BrowserRouter>
      <Theme themeName={themeName}>
        <Layout setThemeName={setThemeName} themeName={themeName}>
          <Switch>
            <Route
              path="/portfolio"
              component={() => <Portfolio themeName={themeName} />}
            />
            <Route path="/experience" component={Experience} />
            <Route
              path="/skills"
              component={() => <Skills themeName={themeName} />}
            />
            <Route path="/" exact component={About} />
            {/* <Redirect from="/something" to="/something-else" /> */}
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Theme>
    </BrowserRouter>
  )
}

export default App
