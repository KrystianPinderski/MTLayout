import React, { Component } from 'react'
import './LatterCompositionsCounter.css'
import sound from '../../images/sound.png';
import love from '../../images/love.png';
import share from '../../images/share.png';
import comments from '../../images/comments.png';

export default class LatterCompositionsCounter extends Component {
    render() {
        let image = this.props.sound?sound:this.props.love?love:this.props.share?share:comments
        return (
            <div className="LatterCounter-Container">
                <img src={image} alt="icon" width="16" height="16"></img>
                <p>{this.props.value}</p>
            </div>
        )
    }
}
