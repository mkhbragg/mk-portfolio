import React, { Component } from "react";
import { Route, withRouter, Switch, Redirect, NavLink } from "react-router-dom";

import BarChart from "../../components/UI/Charts/BarChart/BarChart";
import { SKILL_DATA, LIBSKILL_DATA } from "../../resources/SkillData";
import styles from "../../assets/sass/style.module.scss";
import "./Skills.scss";

class Skills extends Component<any, any> {
  state = {
    selectedChart: "core",
  };

  render() {
    const fontColor =
      this.props.themeName === "dark-theme"
        ? styles.darkThemeDefaultText
        : styles.lightThemeDefaultText;

    const secondaryFontColor =
      this.props.themeName === "dark-theme"
        ? styles.darkThemeSecondaryText
        : styles.lightThemeSecondaryText;

    const options = {
      scales: {
        xAxis: {
          grid: {
            color: secondaryFontColor,
          },
          ticks: {
            color: fontColor,
          },
        },
        yAxis: {
          grid: {
            color: secondaryFontColor,
          },
          ticks: {
            beginAtZero: true,
            color: fontColor,
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            color: fontColor,
            font: "Futura",
            boxWidth: 30,
          },
          position: "bottom",
        },
      },
    };

    return (
      <div className="Skills">
        <nav>
          <ul>
            <li>
              <NavLink to={`${this.props.match.url}/core`}>Core</NavLink>
            </li>
            <li>
              <NavLink to={`${this.props.match.url}/tools`}>
                Tools &amp; Libraries
              </NavLink>
            </li>
            {/* <li>
              <NavLink to={`${this.props.match.url}/general`}>General</NavLink>
            </li> */}
          </ul>
        </nav>
        <p>
          Each segment of the chart below expresses years of experience in a
          given area.
        </p>
        <Switch>
          <Route
            path={`${this.props.match.url}/core`}
            exact
            component={() => <BarChart data={SKILL_DATA} options={options} />}
          />
          <Route
            path={`${this.props.match.url}/tools`}
            exact
            component={() => (
              <BarChart data={LIBSKILL_DATA} options={options} />
            )}
          />
          {/* <Route
            path={`${this.props.match.url}/general`}
            exact
            component={() => (
              <BarChart data={GENSKILL_DATA} options={options} />
            )}
          /> */}
          <Redirect from="/" to={`${this.props.match.url}/core`} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Skills);
