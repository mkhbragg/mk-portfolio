import React, { Component } from 'react';
import { Route, withRouter, Switch, Redirect, NavLink } from 'react-router-dom';

import PieChart from '../../components/UI/Charts/PieChart/PieChart';
import { SKILL_DATA, LIBSKILL_DATA, GENSKILL_DATA } from '../../resources/SkillData';
import styles from '../../assets/sass/style.module.scss';
import './Skills.scss';

class Skills extends Component<any, any> {

    state = {
        selectedChart: 'core'
    }

    render() {
        const options = { 
            legend: {
                labels: {
                    fontColor: this.props.themeName === 'dark-theme' ? styles.darkThemeDefaultText : styles.lightThemeDefaultText,
                    fontFamily: 'Futura',
                    boxWidth: 10
                },
                position: 'bottom'
            }
        };

        return (
            <div className="Skills">
                <nav>
                    <ul>
                        <li><NavLink to={`${this.props.match.url}/core`}>Core</NavLink></li>
                        <li><NavLink to={`${this.props.match.url}/tools`}>Tools &amp; Libraries</NavLink></li>
                        <li><NavLink to={`${this.props.match.url}/general`}>General</NavLink></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path={`${this.props.match.url}/core`} exact component={() => <PieChart data={SKILL_DATA} options={options} /> } />
                    <Route path={`${this.props.match.url}/tools`} exact component={() => <PieChart data={LIBSKILL_DATA} options={options} /> } />
                    <Route path={`${this.props.match.url}/general`} exact component={() => <PieChart data={GENSKILL_DATA} options={options} /> } />
                    <Redirect from="/" to={`${this.props.match.url}/core`} />
                </Switch>
                <p>Each segment of the doughnut charts above expresses years of experience in a given area.</p>
            </div>
        );
    }
}

export default withRouter(Skills);