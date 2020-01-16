import React from 'react'
import User from '../assets/images/user.jpg'
import {NavLink} from 'react-router-dom'

class Menu extends React.Component {
  render() {
    return (
      <section className="menu">
        <a class="logo" href="#">
          <img src="assets/images/logo.png" />
        </a>
        <div class="menu-user" style={{ backgroundImage: `url(${User})` }}></div>
        <div class="menu-add">
          <img src="assets/images/icon_plus.svg" />
        </div>
        <nav class="nav">
          <div class="nav__line"></div>
          <ul class="nav-list">
            <li class="nav-item">
              <NavLink exact to='/'>
                <img src="assets/images/icon_fire.svg" />
                <div class="nav-item__desc">
                  <p>Лента</p>
                </div>
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink to='/map'>
                <img src="assets/images/icon_map.svg" />
                <div class="nav-item__desc">
                  <p>Катания</p>
                </div>
              </NavLink>
            </li>
            <li class="nav-item">
              <img src="assets/images/icon_boot.svg" />
              <div class="nav-item__desc">
                <p>Барахолка</p>
              </div>
            </li>
          </ul>
        </nav>
      </section>
    );
  }
}

export default Menu;
