import React from 'react';
import { Link } from 'react-router-dom';

import { SideNav, SideNavItem, Button } from 'react-materialize';

import SideDrawer from './side-drawer.js';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut() {
    console.log('logging out');
  }

  render() {
    return (
      <div className="nav-bar">
        <nav>
          <div className="nav-wrapper teal lighten-2">
            <span className="brand-logo center nav-bar-title">ifeedme</span>
            <SideNav
              trigger={<a className="button-collapse">
                <i className="material-icons">menu</i>
              </a>}
              options={{ closeOnClick: true }}
            >
              <div align="center">
                <Button className="waves-effect waves-light btn red lighten-1" onClick={this.handleLogOut}>Log Out</Button>
              </div>
              <ul>
                <li><Link to="dashboard">Dashboard</Link></li>
                <li><Link to="recipes">Recipes</Link></li>
                <li><Link to="meals">Meals</Link></li>
              </ul>
            </SideNav>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="dashboard">Dashboard</Link></li>
              <li><Link to="recipes">Recipes</Link></li>
              <li><Link to="meals">Meals</Link></li>
              <li>
                <SideNav
                  trigger={<a className="button-profile">
                    <i className="material-icons">person</i>
                  </a>}
                  options={{ closeOnClick: true, edge: 'right' }}
                >
                  <div>
                    <SideDrawer />
                  </div>
                </SideNav>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
