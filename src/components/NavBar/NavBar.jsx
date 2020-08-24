import React, { Component } from 'react';
import './style.css'
import MenuItem from './ManuItem';
import Logo from './images/news.png'
import Clock from './Clock';
import SearchBySubject from './SearchBySubject';

class NavBar extends Component{

 
    render(){
        return(
            <header>
                <nav>
                    <div className="navBar-caixa">
                        <h1><img src={Logo}></img></h1>
                        <ul className="nav-items">
                            {this.props.menuItems.map((item, index) => {
                                return(
                                    <MenuItem key={index} name={item}/>
                                )
                            })}
                            <SearchBySubject></SearchBySubject>
                        </ul>
                    </div>
                    <Clock/>
                </nav>
            </header>
        );
    }
}

export default NavBar;