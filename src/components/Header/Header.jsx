import Avater from "@material-ui/core/Avatar"
import AppsIcon from "@material-ui/icons/Apps"
import MenuIcon from "@material-ui/icons/Menu"
import NotificationIcon from "@material-ui/icons/Notifications"
import SearchIcon from "@material-ui/icons/Search"
import VideCallIcon from "@material-ui/icons/VideoCall"
import React from 'react'
import "./Header.css"

export function Header() {
    return (
        <div className="header">
            <div className="header">
                <MenuIcon />
                <img
                    className="header__logo"
                    src="http://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
                    alt=""
                />
            </div>
            <div className="header__input">
                <input placeholder="Search" type="text" />
                <SearchIcon className="header__inputButton"/>
            </div>

            <div className="header__icons">
                <VideCallIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationIcon className="header__icon" />
                <Avater
                    alt="Mario Pavlov"
                    src="https://avatars1.githubusercontent.com/u/23291481?s=460&u=63cc3ad7a1dab3245832ba73e4a277d7e57788cc&v=4"
                />
            </div>
        </div>
    )
}