import React, { Component } from 'react';
import './style.css'

class MenuItem extends Component{

    render(){
        return(
            <li><a href={`/${this.props.name.toLowerCase()}`}>{this.props.name}</a></li>
        );
    }
}

export default MenuItem;