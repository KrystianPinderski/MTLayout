import React, { Component } from 'react'
import './AppButton.css'

export default class AppButton extends Component {
    render() {
        return (
            <div className={
                this.props.buttonColor === "transparent" ? "ButtonTransparent"
                    : this.props.buttonColor === "dark" ? "ButtonDark"
                        : this.props.buttonColor === "light" ? "ButtonLight"
                            : "Button"
            }
                onClick={this.props.onClick}
                style={this.props.style}
            >
                {this.props.buttonColor === "transparent" ? <p><b>{this.props.text}</b></p> : <p>{this.props.text}</p>}
            </div>
        )
    }
}
