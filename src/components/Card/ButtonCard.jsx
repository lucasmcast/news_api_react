import React, { Component } from 'react';

class ButtonCard extends Component{

    render(){
        return(
            <button
                onClick={this.props.clickButton}
                className={`btn-${this.props.nameButton.toLowerCase()}`}
            >{this.props.nameButton}</button>
        );
    }
}

export default ButtonCard;