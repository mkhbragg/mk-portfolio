import React, { FC } from 'react'
import { Route, withRouter, Switch, Redirect, NavLink } from 'react-router-dom'

import {
  CORE_SKILLS,
  FRAMEWORK_SKILLS,
  TOOLS_SKILLS,
} from '../../resources/SkillData'
import './Skills.scss'
import { SkillSet } from './SkillSet'

export const Skills: FC<any> = (props) => {
  return (
    <div className="Skills">
      <nav>
        <ul>
          <li>
            <NavLink to={`${props.match.url}/core`}>Core</NavLink>
          </li>
          <li>
            <NavLink to={`${props.match.url}/frameworks`}>Frameworks</NavLink>
          </li>
          <li>
            <NavLink to={`${props.match.url}/tools`}>Tools</NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route
          path={`${props.match.url}/core`}
          exact
          component={() => (
            <SkillSet themeName={props.themeName} skills={CORE_SKILLS} />
          )}
        />
        <Route
          path={`${props.match.url}/frameworks`}
          exact
          component={() => (
            <SkillSet themeName={props.themeName} skills={FRAMEWORK_SKILLS} />
          )}
        />
        <Route
          path={`${props.match.url}/tools`}
          exact
          component={() => (
            <SkillSet themeName={props.themeName} skills={TOOLS_SKILLS} />
          )}
        />
        <Redirect from="/" to={`${props.match.url}/core`} />
      </Switch>
    </div>
  )
}

export default withRouter(Skills)
