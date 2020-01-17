import React from 'react'
import User from '../assets/images/user.jpg'

class Panel extends React.Component {
  render() {
    return (
        <section class="panel">
            <div class="panel-user">
                <div class="user-avatar" style={{ backgroundImage: `url(${User})` }}>
                    <div class="user-cats">
                        <div class="user-cats__item"></div>
                    </div>
                </div>
                <p class="user-name">John Jackson</p>
                <a class="panel-add" href="#">
                    <p>Создать</p>
                </a>
            </div>
        </section>
    )
}}

export default Panel